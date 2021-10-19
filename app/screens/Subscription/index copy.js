import React, { useEffect, useState, useRef, useContext } from "react";
import IAP from "react-native-iap";
import moment from "moment";
import PaystackWebView from "react-native-paystack-popup";
import Subscription from "./components/Subscription";
import Error from "../../component/modal/error";
import Success from "../../component/modal/success";
import { apiCall, setDefaultHeader } from "../../utils/httpClient";
import { PAYS_STACK_KEY, PAYPAL_CLINT_ID } from "../../utils/constant";
import ENDPOINTS from "../../utils/apiEndPoints";
import { AuthContext } from "../../component/AuthContext";
import PayPal from "react-native-paypal-gateway";
import Loader from "../../utils/Loader";
import styles from "./components/styles";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
} from "react-native";
import {
  FONT_FAMILY_BOLD,
  WHITE_COLOR_CODE,
  BLACK_COLOR_CODE,
  COMMONTHEMECOLOR,
  FONT_FAMILY_REGULAR,
  PLAN_ACTIVE_COLOR_CODE,
  PLAN_DEACTIVE_COLOR_CODE,
} from "../../utils/constant";
import { UserContext } from "../../utils/UserContext";
import { useFocusEffect } from '@react-navigation/native';

//const productIds = ['com.nokelstv100'];
const SubscriptionView = ({ navigation, route }) => {
  const { email, token, status } = route.params;
  const [visible, setVisible] = useState(false);
  const [visibleErr, setVisibleErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [PackageList, setPackageList] = useState("");
  const [Item, setItem] = useState("");
  const [SelectedPlan, setSelectedPlan] = useState("");
  const { signIn } = React.useContext(AuthContext);
  const [userData, setUserData] = useContext(UserContext);
  const ref = useRef(null);
  const [showPayment, setShowPayment] = useState(false);
  const [PackageCurrency, setPackageCurrency] = useState("");
  const [SelectPayment, setSelectPayment] = useState("");
  const [couponCode, setCouponCode] = useState(0);
  const [couponDays, setCouponDays] = useState(0);
  const [isCouponValid, setIsCouponValid] = useState(0);
  const [ammount, setAmmount] = useState("");
  const [finalamount, setFinalAmount] = useState("");
  // const [finalamount, setFinalAmount] = useState('')
  const [products, setProducts] = useState([]);
  /*useEffect(() => {
    _handlePackageList();
  }, []);*/

  useEffect(() => {
    // IAP.getProducts(productIds).then((res) => {
    // //   alert(JSON.stringify(res))
    //   setProducts(res)
    // });
    _handlePackageList();
    
    const interval = setInterval(() => {
      _handleInappPurchase()
    }, 1000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  const _handleInappPurchase = async () => {
    // await IAP.initConnection();
    const purchaseUpdateSubscription = IAP.purchaseUpdatedListener(
      (purchase) => {
      console.log('purchase: ', purchase);
        const receipt = purchase.transactionReceipt;
        if (receipt) {
        console.log('receipt: ', receipt);
            alert(JSON.stringify(receipt))
          // receipt.transaction = moment.unix();
          // _handleSuccessPayment(receipt, 2);
        }
      }
    );
    const purchaseErrorSubscription = IAP.purchaseErrorListener((error) => {
    console.log('error: ', error);
      if (error["responseCode"] == "2") {
        Alert.alert("Error", "User Cancelled ");
      } else {
        Alert.alert(
          "Error",
          "There has been an error with your purchase, error code = " +
            error["code"]
        );
      }
    });
    

    return () => {
      purchaseUpdateSubscription.remove();
    };
  }
  function NavToChoosePlan() {
    navigation.goBack(null);
  }
  function NavToSignUp() {
    // console.log(': Item', Item.id == 0);
    if (PackageCurrency === "NGN") {
      Item.id == 0 ? _handleSuccessPayment(0, 3) : setShowModal(true);
      //setShowPayment(true);
    } else {
      if (Platform.OS === "ios") {
        Item.id == 0 ? _handleSuccessPayment(0, 3) : setShowModal(true);
      } else {
        Item.id == 0 ? _handleSuccessPayment(0, 3) : PaypalFunction();
      }
    }
  }
  const _handlePackageList = async () => {
    setVisible(true);
    try {
      const response = await apiCall("POST", ENDPOINTS.GET_PACKAGE_PLAN);
      console.log("response: ", response);
      if (response.status === 200) {
        setVisible(false);
        setPackageCurrency(response.data.currency);
        setPackageList(response.data.data);
      } else {
        setVisible(false);
        setVisibleErr(true);
        setErrorMessage(response.data.message);
      }
      // else if (response.status === 201) {
      //     setVisible(false)
      //     setVisibleErr(true)
      //     setErrorMessage(response.data.message)
      // }
      // else {
      //     navigation.navigate('SignIn')
      // }
    } catch (e) {
      setVisible(false);
      setVisibleErr(true);
      setErrorMessage(e.toString());
    }
  };
  function _handleFocusYearly(item, index) {
    //alert(JSON.stringify(item))
    setItem(item);
    setSelectedPlan(index);
    setFinalAmount(item.plan_price);
  }
  const _renderItems = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor:
            SelectedPlan === index
              ? PLAN_ACTIVE_COLOR_CODE
              : PLAN_DEACTIVE_COLOR_CODE,
          justifyContent: "center",
          alignItems: "center",
          height: 95,
          width: 95,
          borderRadius: 7,
          marginLeft: 5,
          marginRight: 5,
        }}
        onPress={() => _handleFocusYearly(item, index)}
      >
        <Text
          style={{
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: 15,
            color: SelectedPlan === index ? WHITE_COLOR_CODE : BLACK_COLOR_CODE,
          }}
        >
          {item.plan_days} Days
        </Text>
        <Text
          style={{
            fontFamily: FONT_FAMILY_BOLD,
            fontSize: 15,
            color: SelectedPlan === index ? WHITE_COLOR_CODE : BLACK_COLOR_CODE,
          }}
        >
          {PackageCurrency + " " + item.plan_price}
        </Text>
      </TouchableOpacity>
    );
  };
  const _handleSuccessPayment = async (response, CommonId) => {
    setVisible(true);
    const params = {
      plan_id: Item.id,
      transaction_id:
      CommonId == 3
      ? ""
      : CommonId === 0
      ? response.response.id
      :CommonId === 2? response.transactionId:"",
      pay_by: CommonId === 1 ? 1 : CommonId === 2 ? 2 : 0,
      payment_detail: "",
      amount: finalamount,
      payment_date: Item.update_date,
      order_id: "",
      coupon_code: couponCode,
      coupon_days: couponDays,
    };
    console.log('params: ', params);
    try {
      const response = await apiCall("POST", ENDPOINTS.USER_PAYMENT, params);
      if (response.status === 200) {
        console.log("response: ", response);
        setVisible(false);
        setShowPayment(false);

        if (status === 1) {
          const { data } = await apiCall("post", ENDPOINTS.GET_USER_PROFILE);
          if (data.status === 200) {
            setUserData(data.data);
            await setDefaultHeader("token", token);
            signIn(token);
          } else if (data.status === 201) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          } else if (data.status === 401) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          }
        } else if (status === 0) {
          await setDefaultHeader("token", token);
          const { data } = await apiCall("post", ENDPOINTS.GET_USER_PROFILE);
          if (data.status === 200) {
            setUserData(data.data);
            navigation.navigate("MovieDetail");
          } else if (data.status === 201) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          } else if (data.status === 401) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          }
        } else {
          await setDefaultHeader("token", token);
          const { data } = await apiCall("post", ENDPOINTS.GET_USER_PROFILE);
          if (data.status === 200) {
            setUserData(data.data);
            navigation.push("Profile");
          } else if (data.status === 201) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          } else if (data.status === 401) {
            setVisibleErr(true);
            setErrorMessage(data.message);
            navigation.navigate("SignIn");
          }
        }
      } else if (response.status === 201) {
        setVisibleErr(true);
        setVisible(false);
        setErrorMessage(response.data.message);
        navigation.navigate("SignIn");
      } else if (response.status === 401) {
        setVisibleErr(true);
        setVisible(false);
        setErrorMessage(response.data.message);
        navigation.navigate("SignIn");
      }
    } catch (e) {
      setVisible(false);
      setVisibleErr(true);
      setErrorMessage(e.toString());
    }
  };
  function PaypalFunction() {
    //alert(PAYPAL_CLINT_ID);
    console.log("PAYPAL_CLINT_ID", PAYPAL_CLINT_ID);
    PayPal.initialize(PayPal.PRODUCTION, PAYPAL_CLINT_ID);
    PayPal.pay({
      price: "" + finalamount,
      currency: PackageCurrency,
      description: Item.plan_duration + " " + "Subscription",
    })
      .then((confirm) => {
        console.log("confirm", confirm);
        _handleSuccessPayment(confirm, 0);
      })
      .catch((error) => console.log("error", error));
  }

  function onPressPaystack(selectPay) {
    setSelectPayment(selectPay);
  }

  function onPressConfirm() {
    if (SelectPayment === "") {
    } else {
      // setShowModal(false)
      if (SelectPayment === 1) {
        // setShowPayment(true)
        handleInAppPurchase();
        setShowModal(false);
      }
      if (SelectPayment === 2) {
        setShowModal(false);
        PaypalFunction();
      }

      if (SelectPayment === 3) {
        setShowModal(false);
        setShowPayment(true);
      }
    }
  }
  async function navtoCoupon() {
    setVisible(true);
    try {
      const params = { coupon_code: couponCode };
      const { data } = await apiCall("POST", ENDPOINTS.COUPON_CODE, params);
      data.status == 200 ? setIsCouponValid(1) : setIsCouponValid(2);
      setVisible(false);

      var finalamt = Item.plan_price - data.data.price_benefit;
      setFinalAmount(finalamt);
      setCouponDays(data.data.days_benefit);
    } catch (error) {
      console.log("error: ", error);
      setVisible(false);
    }
  }
  async function handleInAppPurchase() {
    //alert("===",Item)
    //alert("handleInAppPurchase  "+JSON.stringify(Item.product_id))
    if (Item.id == 0) {
      _handleSuccessPayment(0, 3);
    } else {
      const productIds = [Item.product_id];
      IAP.getProducts(productIds).then((res) => {
        //alert(JSON.stringify(res))
        setProducts(res[0]);
        //alert(res.productId)
        IAP.requestSubscription(res[0].productId);
      });
    }
    //IAP.requestSubscription(Item.product_id)
  }
  return (
    <View style={{ flex: 1 }}>
      {visible && <Loader state={visible} />}
      {showPayment === false ? (
        <View style={{ flex: 1 }}>
          <Subscription
            NavToChoosePlan={() => NavToChoosePlan()}
            NavToSignUp={() => NavToSignUp()}
            PackageList={PackageList}
            _renderItems={_renderItems}
            SelectedPlan={SelectedPlan}
            setCouponCode={setCouponCode}
            couponCode={couponCode}
            navtoCoupon={navtoCoupon}
            isCouponValid={isCouponValid}
            handleInAppPurchase={handleInAppPurchase}
            // success={success}
            // setSuccess={setSuccess}
            // errorCode={errorCode}
            // setErrorCode={setErrorCode}
          />
          <Error
            message={errorMessage}
            visible={visibleErr}
            closeModel={() => setVisibleErr(false)}
          />
          <Success
            message={successMessage}
            visible={visibleSuccess}
            closeModel={() => setVisibleSuccess(false)}
          />
        </View>
      ) : null}
      {showPayment && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <PaystackWebView
            ref={ref}
            onError={() => {
              console.log("error: ");
              setShowPayment(false);
              alert("Failed...");
            }}
            metadata={{ custom_fields: [{ display_name: "Demo Checkout" }] }}
            onDismissed={() => {
              console.log("dismiss: ");
              ref.current.reload(); //reload if dismissed.
              setShowPayment(false);
            }}
            onSuccess={(response) => {
              console.log("response: ", response);
              _handleSuccessPayment(response, 1);
            }}
            paystackKey={PAYS_STACK_KEY}
            customerEmail={email}
            amount={Item.plan_price * 100}
          />
        </View>
      )}

      <Dialog
        visible={ShowModal}
        onTouchOutside={() => {
          setShowModal(false);
        }}
        width={0.9}
        // height={0.4}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        dialogTitle={
          <View
            style={{
              alignItems: "center",
              width: "100%",
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONT_FAMILY_REGULAR,
                color: "#636363",
                fontSize: 16,
              }}
            >
              Select your payment gateway
            </Text>
          </View>
        }
      >
        <DialogContent>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-evenly",
              paddingTop: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                {/* <Image style={{ width: 130, height: 80 }} source={require('../../assets/stripe-acquires-paystack-for-200m.png')} /> */}
                <View style={{ justifyContent: "center", margin: 5 }}>
                  <TouchableOpacity
                    style={{ padding: 0 }}
                    onPress={() => onPressPaystack(1)}
                  >
                    {SelectPayment === 1 ? (
                      <Image
                        style={{ width: 40, height: 40 }}
                        source={require("../../assets/icon-checkbox-checked.png")}
                      />
                    ) : (
                      <Image
                        style={{ width: 40, height: 40 }}
                        source={require("../../assets/icon-checkbox.png")}
                      />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Text
                    style={{
                      fontFamily: FONT_FAMILY_REGULAR,
                      color: "#636363",
                      fontSize: 16,
                    }}
                  >
                    In-App Purchase
                  </Text>
                </View>
              </View>
              {PackageCurrency === "NGN" ? (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* <Image style={{ width: 110, height: 60 }} source={require('../../assets/paypal_mb8k.png')} /> */}
                  <View style={{ justifyContent: "center", margin: 5 }}>
                    <TouchableOpacity
                      style={{ padding: 0 }}
                      onPress={() => {
                        onPressPaystack(3);
                      }}
                    >
                      {SelectPayment === 3 ? (
                        <Image
                          style={{ width: 38, height: 35 }}
                          source={require("../../assets/icon-checkbox-checked.png")}
                        />
                      ) : (
                        <Image
                          style={{ width: 38, height: 35 }}
                          source={require("../../assets/icon-checkbox.png")}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        color: "#636363",
                        fontSize: 16,
                      }}
                    >
                      Paystack
                    </Text>
                  </View>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* <Image style={{ width: 110, height: 60 }} source={require('../../assets/paypal_mb8k.png')} /> */}
                  <View style={{ justifyContent: "center", margin: 5 }}>
                    <TouchableOpacity
                      style={{ padding: 0 }}
                      onPress={() => onPressPaystack(2)}
                    >
                      {SelectPayment === 2 ? (
                        <Image
                          style={{ width: 38, height: 35 }}
                          source={require("../../assets/icon-checkbox-checked.png")}
                        />
                      ) : (
                        <Image
                          style={{ width: 38, height: 35 }}
                          source={require("../../assets/icon-checkbox.png")}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={{
                        fontFamily: FONT_FAMILY_REGULAR,
                        color: "#636363",
                        fontSize: 16,
                      }}
                    >
                      Paypal
                    </Text>
                  </View>
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => onPressConfirm()}
              style={[
                styles.confirmBtnSTyle,
                {
                  backgroundColor:
                    SelectPayment === "" ? "#e6e6e6" : COMMONTHEMECOLOR,
                  marginTop: 20,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: 16,
                  color:
                    SelectPayment === "" ? BLACK_COLOR_CODE : WHITE_COLOR_CODE,
                }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
    </View>
  );
};
export default SubscriptionView;

//  // ammounts = parseInt(ammount) - data.data.price_benefit
//  setAmmount(parseInt(ammount) - data.data.price_benefit)

//  // days = parseInt(day) + data.data.days_benefit
//  setDay(parseInt(day) + data.data.days_benefit);
