import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView, BackHandler
} from 'react-native';
import styles from './styles';
import CalendarPicker from 'react-native-calendar-picker';
import CountDown from '../../../component/CountDown';
import moment from "moment";
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, COMMONTHEMECOLOR, BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../utils/constant'
const Profile = (props) => {
  const [isFocusedName, setIsfocusedName] = useState(true)
  const [ShowGender, setShowGender] = useState(false)
  const [Status, setStatus] = useState(2)
  const [isFocusedEmail, setIsfocusedEmail] = useState(true)
  const [isFocusedMobile, setIsfocusedMobile] = useState(true)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [name, setName] = useState(props.userData.first_name)
  const [email, setEmail] = useState(props.userData.email)
  const [mobile, setMobile] = useState(props.userData.mobile)
  const [ConfirmDate, setConfirmDate] = useState(props.userData.birth_date)
  const [GenderStatus, setGenderStatus] = useState(props.userData.gender)

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  var end_date = moment(props.userData.plan_expire_date, 'YYYY-MM-DD').format('YYYY-MM-DD');
  var date1 = new Date();
  var date2 = new Date(end_date);
  // To calculate the time difference of two dates 
  var Difference_In_Time = date2.getTime() - date1.getTime();
  // To calculate the no. of days between two dates 
  var days = parseInt(Difference_In_Time / (1000 * 3600 * 24));

  // var start_date = moment(props.userData.plan_start_date, 'YYYY-MM-DD H:mm:ss').format('YYYY-MM-DD H:mm:ss');
  // var end_date = moment(props.userData.plan_expire_date, 'YYYY-MM-DD H:mm:ss').format('YYYY-MM-DD H:mm:ss');
  // var diffr = moment.duration(moment(end_date).diff(moment(start_date)));
  // var days = parseInt(diffr.days());
  // var hours = parseInt(diffr.asHours());
  // var minutes = parseInt(diffr.minutes());
  // var seconds = parseInt(diffr.seconds());
  // const duration = days + hours * 60 * 60 + minutes * 60 + seconds;

  useEffect(() => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        onBackPress
      );
    };
  }, []);

  const onBackPress = () => {
    setShowGender(false)
    setShowDatePicker(false)
    return true;
  };

  //firstName
  const labelStyleName = {
    top: isFocusedName ? name === '' ? 27 : 11 : 11,
    fontSize: isFocusedName ? name === '' ? 15 : 13 : 13,
    position: 'absolute',
    left: 23,
    color: isFocusedName ? name === '' ? '#636363' : '#636363' : '#636363',
    justifyContent: "center",
    fontFamily: FONT_FAMILY_REGULAR
  };

  function _handleFocusName() {
    setIsfocusedName(false)
  }
  function _handleBlurName() {
    if (name === '')
      setIsfocusedName(true);
    if (email === '')
      setIsfocusedEmail(true);
    if (mobile === '')
      setIsfocusedMobile(true);
  }

  //Email
  const labelStyleEmail = {
    top: isFocusedEmail ? email === '' ? 27 : 11 : 11,
    fontSize: isFocusedEmail ? email === '' ? 15 : 13 : 13,
    position: 'absolute',
    left: 23,
    color: isFocusedEmail ? email === '' ? '#636363' : '#636363' : '#636363',
    justifyContent: "center",
    fontFamily: FONT_FAMILY_REGULAR
  };
  function _handleFocusEmail() {
    setIsfocusedEmail(false)
  }
  function _handleBlurEmail() {
    if (name === '')
      setIsfocusedName(true);
    if (email === '')
      setIsfocusedEmail(true);
    if (mobile === '')
      setIsfocusedMobile(true);
  }
  //Mobile Number
  const labelStyleMobile = {
    top: isFocusedMobile ? mobile === '' ? 27 : 11 : 11,
    fontSize: isFocusedMobile ? mobile === '' ? 15 : 13 : 13,
    position: 'absolute',
    left: 23,
    color: isFocusedMobile ? mobile === '' ? '#636363' : '#636363' : '#636363',
    justifyContent: "center",
    fontFamily: FONT_FAMILY_REGULAR

  };
  function _handleFocusMobile() {
    setIsfocusedMobile(false)
  }
  function _handleBlurMobile() {
    if (name === '')
      setIsfocusedName(true);
    if (email === '')
      setIsfocusedEmail(true);
    if (mobile === '')
      setIsfocusedMobile(true);
  }

  //main function
  function _handledataupdate() {
    {
      const data = {
        first_name: name,
        mobile: mobile,
        email: email,
        birth_date: ConfirmDate,
        gender: GenderStatus
      }
      // console.log('data: ', data);
      props.savedata(data)
    }
  }

  function onPressShowData(status) {
    setStatus(status)
  }
  function onPressDate() {
    setShowDatePicker(true)
  }
  function onPressGender() {
    setShowGender(true)
  }
  function _handleDate(date) {
    var event = new Date(date);
    let selecteddate = JSON.stringify(event)
    const confirmDate = selecteddate.slice(1, 11)
    setConfirmDate(confirmDate)
  }

  function onPressConfirm() {
    ConfirmDate === "" ? '' :
      setShowDatePicker(false)
  }
  function onPressMaleFemale(status) {
    setGenderStatus(status)
  }
  function onPressConfirmGender() {
    setShowGender(false)
  }
  return (
    <View style={[styles.container]}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/blurred-bokeh-background_36923-877.jpg')}>
        <View style={styles.headerView}>
          <TouchableOpacity style={{ padding: 10, paddingLeft: 0, paddingTop: 0 }} onPress={() => props.NavToDashboard()}>
            <Image
              style={styles.backBtn}
              source={require('../../../assets/header-back-btn.png')}
            />
          </TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headertxt}>
              Profile
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={[styles.firstvw]}>
            <View style={{ position: 'absolute', top: -55 }}>
              <Image
                source={{
                  uri: props.userData.profile
                }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
            </View>
            <View style={{ position: 'absolute', right: 10 }}>

              <TouchableOpacity onPress={() => props.onPressLogout()}>
                <Image
                  source={require('../../../assets/profile-logout-icon.png')}
                />
              </TouchableOpacity>

            </View>
            <View style={{
              marginTop: "20%", flexDirection: 'row',
              width: windowWidth
            }}>

              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <Text style={styles.descriptionTxt}>
                  {props.userData.first_name}
                </Text>

              </View>
              {

                console.log(':days ', days, props.userData.plan_status)
              }
              {/*
              <View
                style={styles.scdinrvw}>
                 <View>
                  <TouchableOpacity
                    onPress={() => props.NavToChatScreen()} >
                    <Image
                      source={require('../../../assets/profile-chat-icon.png')}
                    />
                  </TouchableOpacity>
                </View> */}
              {/* <TouchableOpacity style={styles.settingBtn}>
                    <Text
                      style={styles.stgbtntxt}>
                      Settings
                  </Text>
                  </TouchableOpacity> 

              </View>
              */}
            </View>
          </View>
          <View style={{ backgroundColor: '#ffffff', marginTop: "1%" }}>
            <KeyboardAvoidingView>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => onPressShowData(2)} style={{ padding: 15 }}>
                  <Text style={{
                    fontSize: 18,
                    fontFamily: FONT_FAMILY_REGULAR,
                    borderBottomWidth: Status === 2 ? 2 : 0,
                    borderBottomColor: COMMONTHEMECOLOR,
                    color: Status === 2 ? COMMONTHEMECOLOR : BLACK_COLOR_CODE,
                  }}>Your Subscription</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onPressShowData(1)} style={{ padding: 15 }}>
                  <Text style={{
                    fontSize: 18,
                    fontFamily: FONT_FAMILY_REGULAR,
                    borderBottomWidth: Status === 1 ? 2 : 0,
                    borderBottomColor: COMMONTHEMECOLOR,
                    color: Status === 1 ? COMMONTHEMECOLOR : BLACK_COLOR_CODE,
                  }}>Profile Details</Text>
                </TouchableOpacity>
              </View>

              {Status === 1 ?
                <View style={[styles.credentials]}>
                  <View style={[styles.input]}>
                    <Text
                      // textAlignVertical={true}
                      style={labelStyleName}>
                      Name
                    </Text>
                    <TextInput
                      style={styles.textInput}
                      value={name}
                      onFocus={_handleFocusName}
                      onBlur={_handleBlurName}
                      onChangeText={(name) => setName(name)}
                      value={name}
                    />
                  </View>
                  <View style={styles.input}>
                    <Text
                      textAlignVertical={true}
                      style={labelStyleMobile}
                    >
                      Mobile Number
                          </Text>
                    <TextInput
                      keyboardType={'number-pad'}
                      style={styles.textInput}
                      value={mobile}
                      onFocus={_handleFocusMobile}
                      onBlur={_handleBlurMobile}
                      onChangeText={(text) => setMobile(text)}
                    />
                  </View>

                  <View style={styles.input}>
                    <Text
                      textAlignVertical={true}
                      style={labelStyleEmail}
                    >
                      Email
                          </Text>
                    <TextInput
                      style={styles.textInput}
                      onFocus={_handleFocusEmail}
                      onBlur={_handleBlurEmail}
                      onChangeText={(text) => setEmail(text)}
                      value={email}
                    />
                  </View>

                  <TouchableOpacity onPress={() => onPressDate()} style={[styles.input, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }]}>
                    <Text
                      style={{
                        color: ConfirmDate ? BLACK_COLOR_CODE : '#636363',
                        justifyContent: "center",
                        fontSize: ConfirmDate ? 16 : 13,
                        fontFamily: ConfirmDate ? FONT_FAMILY_BOLD : FONT_FAMILY_REGULAR,
                      }}
                    >
                      {ConfirmDate ? ConfirmDate : 'Date of Birth'}
                    </Text>
                    <Image
                      style={{}}
                      source={require('../../../assets/profile-input-calendar-icon.png')}></Image>
                  </TouchableOpacity>

                  <Dialog
                    visible={showDatePicker}
                    onTouchOutside={() => {
                      setShowDatePicker(false)
                    }}
                    dialogAnimation={new SlideAnimation({
                      slideFrom: 'bottom',
                    })}
                  >
                    <DialogContent>
                      <View>
                        <CalendarPicker
                          onDateChange={(date) => _handleDate(date)}
                          maxDate={new Date()}
                          selectedDayColor={COMMONTHEMECOLOR}
                          selectedDayTextColor={WHITE_COLOR_CODE}
                        />
                        <TouchableOpacity
                          onPress={() => onPressConfirm()}
                          style={[styles.confirmBtnSTyle, { backgroundColor: ConfirmDate === "" ? '#e6e6e6' : COMMONTHEMECOLOR }]}
                        >
                          <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 16, color: ConfirmDate === "" ? BLACK_COLOR_CODE : WHITE_COLOR_CODE }}>Confirm</Text>
                        </TouchableOpacity>
                      </View>
                    </DialogContent>
                  </Dialog>

                  <View style={[styles.input, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }]}>
                    {GenderStatus === "" || GenderStatus === null &&
                      <Text style={{ fontSize: 13, color: '#636363', justifyContent: "center", fontFamily: FONT_FAMILY_REGULAR, }} >
                        {'Gender'}
                      </Text>
                    }
                    {GenderStatus === "1" &&
                      <Text style={styles.nameclass} >
                        {'Male'}
                      </Text>
                    }
                    {GenderStatus === "0" &&
                      <Text style={styles.nameclass} >
                        {'Female'}
                      </Text>
                    }
                    <TouchableOpacity onPress={() => onPressGender()}>
                      <Image
                        style={{}}
                        source={require('../../../assets/profile-input-dropdown-icon.png')}></Image>
                    </TouchableOpacity>
                  </View>

                  <Dialog
                    visible={ShowGender}
                    onTouchOutside={() => {
                      setShowGender(false)
                    }}
                    width={0.8}
                    dialogAnimation={new SlideAnimation({
                      slideFrom: 'bottom',
                    })}
                    dialogTitle={
                      <View style={{ alignItems: "center", width: '100%', paddingTop: 20, paddingBottom: 10 }}>
                        <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: '#636363', fontSize: 16 }}>Select your gender</Text>
                      </View>
                    }
                  >
                    <DialogContent>
                      <View style={{ paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 35 }}>
                        {GenderStatus === "1" ?
                          <TouchableOpacity
                            style={{ backgroundColor: COMMONTHEMECOLOR, borderRadius: 90, width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => onPressMaleFemale("1")}>
                            <Image style={{ width: 60, height: 60 }} source={require('../../../assets/man.png')} />
                          </TouchableOpacity> :
                          <TouchableOpacity
                            style={{ borderRadius: 90, width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => onPressMaleFemale("1")}>
                            <Image style={{ width: 60, height: 60 }} source={require('../../../assets/man.png')} />
                          </TouchableOpacity>
                        }
                        {GenderStatus === "0" ?
                          <TouchableOpacity
                            style={{ backgroundColor: COMMONTHEMECOLOR, borderRadius: 90, width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => onPressMaleFemale("0")}>
                            <Image style={{ width: 60, height: 60 }} source={require('../../../assets/girl.png')} />
                          </TouchableOpacity> :
                          <TouchableOpacity
                            style={{ borderRadius: 90, width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => onPressMaleFemale("0")}>
                            <Image style={{ width: 60, height: 60 }} source={require('../../../assets/girl.png')} />
                          </TouchableOpacity>
                        }

                      </View>
                      <TouchableOpacity
                        onPress={() => onPressConfirmGender()}
                        style={[styles.confirmBtnSTyle, { backgroundColor: GenderStatus === "" ? '#e6e6e6' : COMMONTHEMECOLOR, marginTop: 20 }]}
                      >
                        <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 16, color: GenderStatus === "" ? BLACK_COLOR_CODE : WHITE_COLOR_CODE }}>Confirm</Text>
                      </TouchableOpacity>
                    </DialogContent>
                  </Dialog>


                  <TouchableOpacity
                    onPress={() => _handledataupdate()}
                    style={styles.mnbtncon}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: FONT_FAMILY_BOLD
                      }}>
                      Save Changes
                  </Text>
                  </TouchableOpacity>
                </View> :

                <View style={[styles.credentials]}>
                  {props.userData.plan_status === 1 &&<View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20, color: COMMONTHEMECOLOR }}>{props.userData.plan_title}</Text>
                    <Text style={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20, color: COMMONTHEMECOLOR }}>{'Active'}</Text>
                  </View>}
                  {props.userData.plan_status === 0 ?
                    <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontFamily: FONT_FAMILY_BOLD, fontSize: 20, color: BLACK_COLOR_CODE , textAlign:"center"}}>{'Plan expired'}</Text>
                    </View>
                    : <View style={{ paddingLeft: 15 }}>
                      <Text style={{ fontSize: 15, color: "#1a191f", fontFamily: FONT_FAMILY_REGULAR, paddingBottom: 10 }}>• {props.userData.currency}</Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, color: "#1a191f", fontFamily: FONT_FAMILY_REGULAR, paddingBottom: 10 }}>•</Text>
                        <Text style={{ fontSize: 15, color: "#1a191f", fontFamily: FONT_FAMILY_REGULAR, paddingBottom: 10 }}> {days} Days left</Text>
                      </View>
                      <Text style={{ fontSize: 15, color: "#1a191f", fontFamily: FONT_FAMILY_REGULAR, paddingBottom: 10 }}>• {'Full Access'}</Text>
                    </View>}
                  <TouchableOpacity
                    onPress={() => props._handleSubscription()}
                    style={styles.mnbtncon}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: FONT_FAMILY_BOLD
                      }}>
                      {props.userData.plan_status === 0 ? "Purchase Plan" : "Upgrade Plan"}
                    </Text>
                  </TouchableOpacity>
                  {
                     props.userData.subscription_type === 1?
                  <TouchableOpacity
                    onPress={() => props.cancelSubscription()}
                    style={styles.cancelbtncon}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                        fontFamily: FONT_FAMILY_BOLD
                      }}>
                      {props.userData.subscription_type === 1 ? "Cancel subscription" : ""}
                    </Text>
                  </TouchableOpacity>:null
                  }
                </View>

              }
            </KeyboardAvoidingView>
          </View>

        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Profile;
