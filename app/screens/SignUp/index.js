import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import SignUp from './components/SignUp';
import { apiCall, setDefaultHeader } from '../../utils/httpClient';
import { BASEURL } from '../../utils/constant';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
import { UserContext } from '../../utils/UserContext';
import auth from '@react-native-firebase/auth';
import CountryCodeArray from '../../utils/countryData';


import _ from 'lodash'
const SignUpView = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [isFocusedName, setIsfocusedName] = useState(true)
    const [isFocusedEmail, setIsfocusedEmail] = useState(true)
    const [isFocusedPassword, setIsfocusedPassword] = useState(true)
    const [isFocusedMobile, setIsfocusedMobile] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const [visibleErr, setVisibleErr] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [ModalVisible, setModalVisible] = useState(false);
    const [countryCodeModal, setCountryCodeModal] = useState(false);
    const [countryCodeData, setCountryCodeData] = useState(CountryCodeArray);
    const [countryCode, setCountryCode] = useState("");
    const [successMessage, setSuccessMessage] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    const [userData, setUserData] = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [CountryDataArray, setCountryDataArray] = useState('')
    const [CountryName, setCountryName] = useState('')
    const [Country_Id, setCountryId] = useState('')
    // const [CouponCode, setCouponCode] = useState('')

    useEffect(() => {
        _handleCountryData()
    }, []);

    function _handleFocusName() {
        setIsfocusedName(false)
    }
    function _handleBlurName() {
        if (name === '')
            setIsfocusedName(true);
        if (email === '')
            setIsfocusedEmail(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (mobile === '')
            setIsfocusedMobile(true);
    }
    function _handleFocusEmail() {
        setIsfocusedEmail(false)
    }
    function _handleBlurEmail() {
        if (name === '')
            setIsfocusedName(true);
        if (email === '')
            setIsfocusedEmail(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (mobile === '')
            setIsfocusedMobile(true);
    }
    function _handleFocusPassword() {
        setIsfocusedPassword(false)
    }
    function _handleBlurPassword() {
        if (name === '')
            setIsfocusedName(true);
        if (email === '')
            setIsfocusedEmail(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (mobile === '')
            setIsfocusedMobile(true);
    }
    function _handleFocusMobile() {
        setIsfocusedMobile(false)
    }
    function _handleBlurMobile() {
        if (name === '')
            setIsfocusedName(true);
        if (email === '')
            setIsfocusedEmail(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (mobile === '')
            setIsfocusedMobile(true);
    }
    function validationFrom() {
        if (name == '') {
            setErrorMessage('Please enter your name');
            setVisibleErr(true)
            return false;
        }
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email == "") {
            setErrorMessage('Please enter email address');
            setVisibleErr(true)
            return false;
        } if (reg.test(email) === false) {
            setErrorMessage("please enter correct email address");
            setVisibleErr(true)
            return false;
        }
        if (password == '') {
            setErrorMessage('Please enter password');
            setVisibleErr(true)
            return false;
        }
        if (Country_Id == '') {
            setErrorMessage('Please Select Region');
            setVisibleErr(true)
            return false;
        }
        if (mobile.length < 9 || mobile == '') {
            setErrorMessage('Please enter mobile number correctly');
            setVisibleErr(true)
            return false;
        }
        return true;
    }
    const _handlesignup = async () => {
        const valid = await validationFrom()
        if (valid) {
            setVisible(true)
            try {
                const params = {
                    first_name: name,
                    email: email,
                    password: password,
                    mobile: mobile,
                    country_id: Country_Id,
                    country_code: countryCode
                    // coupon_code: CouponCode
                }
                // alert(JSON.stringify(params))
                const response = await apiCall('POST', BASEURL + ENDPOINTS.USER_SIGN_UP, params);
                if (response.status === 200) {
                 //   console.log('response===>>> Sign Up: ', response);
                    // setVisible(false)
                    await setDefaultHeader('token', response.data.data.token);
                    // await setUserData(response.data.data)
                    setVisibleSuccess(true)
                    setSuccessMessage("Registration has been successful. We have sent verification code on your mobile."
                        + ' ' + countryCode + mobile
                    )
                    const phoneNumber = countryCode + mobile
                    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
                    setVisible(false)
                    navigation.navigate('SignUpOTP', {
                        navType: 1, email: email,
                        phoneNumber: phoneNumber,
                        token: response.data.data.token, confirmation: confirmation
                    })
                }
                else {
                    setVisible(false)
                    setVisibleErr(true)
                    setErrorMessage(response.data.message)
                }
                // else if (response.status === 201) {
                //     setVisible(false)
                //     setVisibleErr(true)
                //     setErrorMessage(response.data.message)
                // }
                // else {
                //     navigation.navigate('SignIn')
                // }
            }
            catch (e) {
                if (error.code === 'auth/invalid-phone-number') {
                    setVisible(false)
                    setErrorMessage('Please enter valid phone number');
                    setVisibleErr(true)
                }else{
                    setVisible(false)
                    setVisibleErr(true)
                    setErrorMessage('Cant connect to server')
                }
            }
        }
    }
    function Navtosignin() {
        navigation.navigate("SignIn")
    }
    function Navtowelcomeslider() {
        navigation.goBack(null)
    }
    const _handleCountryData = async () => {
        setVisible(true)
        try {
            const response = await apiCall('POST', BASEURL + ENDPOINTS.GET_COUNTRY_LIST);
            if (response.status === 200) {
                // console.log('response: ', response);
                setVisible(false)
                setFilterCountry(response.data.data)
                setCountryDataArray(response.data)
            }
            else {
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(response.data.message)
            }
            // else if (response.status === 201) {
            //     setVisible(false)
            //     setVisibleErr(true)
            //     setErrorMessage(response.data.message)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage('Cant connect to server')
        }
    }
    function _handleRegion() {
        _handleCountryData()
        setModalVisible(true)
    }
    function OnpressCountry(item) {
        setCountryName(item.countries_name)
        setCountryId(item.countries_id)
        setModalVisible(false)
    }
    function OnpressCountryCode(item) {
        console.log('item: ', item.dial_code);
        setCountryCode(item.dial_code)
        setCountryCodeModal(!countryCodeModal)
    }

    function SearchCountry(searchKey) {
        const lowerCased = searchKey.toLowerCase();
        const searchArray = [...CountryDataArray.data]
        const list = _.filter(searchArray, (item) => {
            return item.countries_name.toLowerCase().match(lowerCased)
        })
        setFilterCountry(list)
    }
    function SearchCountryCode(searchKey) {
        console.log('searchKey: ', searchKey.toString());
        const lowerCased = searchKey.toLowerCase();
        const searchArray = [...CountryCodeArray]
        let list = searchArray.filter(data => data.name.toLowerCase().includes(lowerCased))
        setCountryCodeData(list)
    }

    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <SignUp
                NavToSignIn={(data) => NavToSignIn(data)}
                Navtosignin={Navtosignin}
                Navtowelcomeslider={Navtowelcomeslider}
                //fb
                isFocusedName={isFocusedName}
                isFocusedEmail={isFocusedEmail}
                isFocusedPassword={isFocusedPassword}
                isFocusedMobile={isFocusedMobile}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                setName={setName}
                setEmail={setEmail}
                setPassword={setPassword}
                setMobile={setMobile}
                _handleFocusName={_handleFocusName}
                _handleBlurName={_handleBlurName}
                _handleFocusEmail={_handleFocusEmail}
                _handleBlurEmail={_handleBlurEmail}
                _handleFocusPassword={_handleFocusPassword}
                _handleBlurPassword={_handleBlurPassword}
                _handleFocusMobile={_handleFocusMobile}
                _handleBlurMobile={_handleBlurMobile}
                _handlesignup={_handlesignup}
                _handleRegion={_handleRegion}
                _handleCountryCode={() => setCountryCodeModal(!countryCodeModal)}
                countryCodeModal={countryCodeModal}
                countryCodeData={countryCodeData}
                CountryCodeArray={CountryCodeArray}
                countryCode={countryCode}
                setModalVisible={setModalVisible}
                ModalVisible={ModalVisible}
                OnpressCountry={OnpressCountry}
                OnpressCountryCode={OnpressCountryCode}
                filterCountry={filterCountry}
                SearchCountry={SearchCountry}
                SearchCountryCode={SearchCountryCode}
                CountryName={CountryName}
            // CouponCode={CouponCode}
            // setCouponCode={setCouponCode}
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
    )
}
export default SignUpView;
