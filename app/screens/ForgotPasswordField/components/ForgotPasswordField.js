import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import styles from './styles';
import {
    FONT_FAMILY_BOLD,
    UPPERTXTCOLOR,
    COMMONTXTCOLOR
} from '../../../utils/constant'
const ForgotPasswordFields = (props) => {
    const [isFocusedotp, setIsfocusedotp] = useState(true)
    const [isFocusedPassword, setIsfocusedPassword] = useState(true)
    const [isFocusedCheckPassword, setisFocusedCheckPassword] = useState(true)
    const [showPassword, setShowPassword] = useState(true)
    const [checkshowPassword, setCheckshowPassword] = useState(true)
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [checkpassword, setCheckPassword] = useState('')
    //OTP
    const labelStyleotp = {
        position: 'absolute',
        left: 25,
        top: isFocusedotp ? 22 : 11,
        justifyContent: "center",
        fontSize: isFocusedotp ? 17 : 13,
        color: isFocusedotp ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD
    };
    function _handleFocusotp() {
        setIsfocusedotp(false)
    }
    function _handleBlurotp() {
        if (otp === '')
            setIsfocusedotp(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (checkpassword === '')
            setisFocusedCheckPassword(true);
    }
    //password
    const labelStylePassword = {
        position: 'absolute',
        left: 25,
        top: isFocusedPassword ? 22 : 11,
        justifyContent: "center",
        fontSize: isFocusedPassword ? 17 : 13,
        color: isFocusedPassword ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    function _handleFocusPassword() {
        setIsfocusedPassword(false)
    }
    function _handleBlurPassword() {
        if (otp === '')
            setIsfocusedotp(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (checkpassword === '')
            setisFocusedCheckPassword(true);
    }
    //CheckPassword
    const labelStyleCheckPassword = {
        position: 'absolute',
        left: 25,
        top: isFocusedCheckPassword ? 22 : 11,
        justifyContent: "center",
        fontSize: isFocusedCheckPassword ? 17 : 13,
        color: isFocusedCheckPassword ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    function _handleFocusCheckPassword() {
        setisFocusedCheckPassword(false)
    }
    function _handleBlurCheckPassword() {
        if (otp === '')
            setIsfocusedotp(true);
        if (password === '')
            setIsfocusedPassword(true);
        if (checkpassword === '')
            setisFocusedCheckPassword(true);
    }
    //data check
    function _handlepasswordupdate() {
        if (otp !== '' && password !== '' && checkpassword !== '') {
            if (password == checkpassword) {
                const params = {
                    'otp': otp,
                    'password': password,
                    'email': props.email,
                }
                // props.setVisible(true)
                props.PasswordUpdate(params)
            }
            else {
                props.setVisible(false)
                props.setVisibleErr(true)
                props.setErrorMessage('Password does not match');
            }
        }
        else {
            props.setVisible(false)
            props.setVisibleErr(true)
            props.setErrorMessage("Please Enter Correct Details");
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => props.Navtoback()}
                style={styles.header}>
                <Image
                    style={styles.bkbtn}
                    source={require('../../../assets/header-back-btn.png')} />
            </TouchableOpacity>
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStyleotp}
                        >
                            One Time Password
                        </Text>
                        <TextInput
                            style={styles.txtipttxt}
                            onFocus={_handleFocusotp}
                            onBlur={_handleBlurotp}
                            onChangeText={(text) => setOtp(text)}
                        />
                    </View>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStylePassword}
                        >
                           New Password
                        </Text>
                        <TextInput
                            secureTextEntry={showPassword}
                            style={styles.txtipttxt}
                            onFocus={_handleFocusPassword}
                            onBlur={_handleBlurPassword}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <TouchableOpacity
                            style={styles.phicon}
                            onPress={() => setShowPassword(!showPassword)}>
                            <Image source={require('../../../assets/password-hide-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStyleCheckPassword}
                        >
                            Confirm Password
                        </Text>
                        <TextInput
                            secureTextEntry={checkshowPassword}
                            style={styles.txtipttxt}
                            onFocus={_handleFocusCheckPassword}
                            onBlur={_handleBlurCheckPassword}
                            onChangeText={(text) => setCheckPassword(text)}
                        />
                        <TouchableOpacity
                            style={styles.phicon}
                            onPress={() => setCheckshowPassword(!checkshowPassword)}>
                            <Image source={require('../../../assets/password-hide-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => _handlepasswordupdate()}
                        style={styles.signincon}>
                        <Text style={styles.btntxt}>
                            Confirm
                    </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView >
    )
}
export default ForgotPasswordFields;