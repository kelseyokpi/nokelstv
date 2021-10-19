import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
    FONT_FAMILY_BOLD,
    UPPERTXTCOLOR,
    COMMONTXTCOLOR,
    COMMONTHEMECOLOR,
    COMMON_BACKGROUND_COLOR,
    WHITE_COLOR_CODE,
    FONT_FAMILY_REGULAR,
} from '../../../utils/constant'
import OtpVerification from '../../../component/OtpVerification';
const SignUpOTP = (props) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <TouchableOpacity
                onPress={() => props.Navtoback()}
                style={styles.header}>
                <Image style={{ width: 35, height: 24 }}
                    source={require('../../../assets/header-back-btn.png')} />
            </TouchableOpacity>
            <View style={styles.body}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <Image source={require('../../../assets/login-logo.png')} />
                </View>
                <View style={{
                    marginBottom: 20, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontFamily: FONT_FAMILY_REGULAR, fontSize: 13,
                        color: COMMONTHEMECOLOR
                    }}>
                        {props.verificationMessage}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <OtpVerification
                            handleTextChange={(otp) => props.setOtp(otp)}
                            tintColor={COMMONTHEMECOLOR}
                            containerStyle
                            textInputStyle={{
                                backgroundColor: COMMON_BACKGROUND_COLOR,
                                borderWidth: 1,
                                color: "#fff",
                                borderBottomWidth: 1
                            }}//input box style
                            inputCount={6}
                            inputCellLength={1}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => props.OtpUpdate()}
                        style={styles.signincon}>
                        <Text style={styles.btntxt}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.retouch}>
                        <Text style={{ fontFamily: FONT_FAMILY_REGULAR, color: WHITE_COLOR_CODE }}>
                            Didn't Receive an OTP?
                        </Text>
                        <TouchableOpacity
                            onPress={() => props.otpresend()} >
                            <Text style={styles.reTXT}>
                                Resend OTP
                        </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default SignUpOTP;