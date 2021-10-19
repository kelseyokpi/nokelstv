import React, { useState, useContext } from 'react';
import SignIn from './components/SignIn';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

import { apiCall, setDefaultHeader } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { View } from 'react-native'
import Loader from '../../utils/Loader';
import { UserContext } from '../../utils/UserContext'
import { AuthContext } from '../../component/AuthContext';
import Error from '../../component/modal/error';
const SignInView = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [visible, setVisible] = useState(false)
    const [userData, setUserData] = useContext(UserContext)
    const [isFocusedEmail, setIsfocusedEmail] = useState(true)
    const [isFocusedPassword, setIsfocusedPassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);

    function validationFrom() {
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
            setErrorMessage('Please enter your password');
            setVisibleErr(true)
            return false;
        }
        return true;
    }

    const _handleSignin = async () => {
        const valid = await validationFrom()
        if (valid) {
            setVisible(true)
        try {
            const params = {
                email: email,
                password: password
            }
            const response = await apiCall('post', ENDPOINTS.USER_SIGN_IN, params);
            if (response.status === 200) {
                if (response.data.data.verified === 1) {
                    console.log('response.data.data.plan_status: ', response.data.data.plan_status);
                    if (response.data.data.plan_status === 1) {
                        setUserData(response.data.data)
                        await AsyncStorage.setItem('localuserdata', JSON.stringify(response.data.data))
                        setVisible(false)
                        signIn(response.data.data.token)
                    }
                    else {
                        await AsyncStorage.setItem('localuserdata', JSON.stringify(response.data.data))
                        await setDefaultHeader("token", response.data.data.token)
                        setUserData(response.data.data)
                        setVisible(false)
                        navigation.navigate('ChoosePlan', { email: email, token: response.data.data.token })
                    }
                }
                else {
                    await setDefaultHeader("token", response.data.data.token)
                    await setUserData(response.data.data)
                    // const phoneNumber = '+919111365071'
                    const phoneNumber = response.data.data.country_code + response.data.data.mobile
                    console.log('phoneNumber: ', phoneNumber);
                    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
                    setVisible(false)
                    navigation.navigate('SignUpOTP', {
                        confirmation: confirmation,
                        email: params.email,
                        phoneNumber: phoneNumber,
                        token: response.data.data.token,
                        navType: 1
                    })
                }
            }
            else {
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(response.data.message)
            }
        } catch (error) {
            if (error.code === 'auth/invalid-phone-number') {
                setVisible(false)
                setErrorMessage('Please enter valid phone number');
                setVisibleErr(true)
            }else{
                console.log('error: ', error);
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(error.toString())
            }
            
        }
        }
    }
    function NavToSignUp() {
        navigation.navigate('SignUp')
    }
    function navtoforgotpassword() {
        navigation.navigate('ForgotPassword')
    }
    function navtodashoard() {
        navigation.navigate('DashBoard')
    }
    //functions
    function _handleFocusEmail() {
        setIsfocusedEmail(false)
    }
    function _handleBlurEmail() {
        if (password === '')
            setIsfocusedPassword(true);
        if (email === '')
            setIsfocusedEmail(true);
    }
    function _handleFocusPassword() {
        setIsfocusedPassword(false)
    }
    function _handleBlurPassword() {
        if (email === '') {
            setIsfocusedEmail(true);
        }

        if (password === '')
            setIsfocusedPassword(true);
    }
    //rfygdrfeuidvgf

    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <SignIn
                NavToSignUp={() => NavToSignUp()}
                navtoforgotpassword={navtoforgotpassword}
                navtodashoard={navtodashoard}
                //work
                isFocusedEmail={isFocusedEmail}
                isFocusedPassword={isFocusedPassword}
                setEmail={setEmail}
                setPassword={setPassword}
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                _handleFocusEmail={_handleFocusEmail}
                _handleBlurEmail={_handleBlurEmail}
                _handleFocusPassword={_handleFocusPassword}
                _handleBlurPassword={_handleBlurPassword}
                _handleSignin={_handleSignin}
            />
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
        </View>
    )
}
export default SignInView;
