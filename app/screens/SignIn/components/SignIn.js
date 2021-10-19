import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {
    FONT_FAMILY_BOLD,
    COMMONTXTCOLOR,
    UPPERTXTCOLOR
} from '../../../utils/constant'
const SignIn = (props) => {
    const input1 = useRef()
    //Email or phone number
    const labelStyle = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedEmail ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedEmail ? 17 : 13,
        color: props.isFocusedEmail ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    //Password
    const passwordLabel = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedPassword ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedPassword ? 17 : 13,
        color: props.isFocusedPassword ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };

    return (
        <ImageBackground style={styles.container}
            source={require("../../../assets/slider1.jpeg")}
        >
            <ScrollView>
               <View style={styles.body}>
                    <TouchableOpacity
                        onPress={() => props.navtodashoard()}
                        style={styles.hdrtccon}>
                        <Text style={styles.hdrtxt}> Skip </Text>
                    </TouchableOpacity>
                    <View style={styles.logview}>
                        <Image resizeMode={"center"} style={styles.logoimg}
                            source={require("../../../assets/login-logo.png")}
                        />
                        <KeyboardAvoidingView
                            behavior={Platform.OS == "ios" ? "padding" : "height"}
                            style={styles.container} >
                            <View style={{ marginTop: 30 }}>
                                <View style={styles.txtipt}>
                                    <Text textAlignVertical={true} style={labelStyle}> 
                                        Email or phone number
                                    </Text>
                                    <TextInput
                                        style={styles.txtipttxt}
                                        onFocus={props._handleFocusEmail}
                                        onBlur={props._handleBlurEmail}
                                        onChangeText={(text) => props.setEmail(text)}
                                        autoCapitalize="none"
                                        returnKeyType='next'
                                        onSubmitEditing={()=> input1?.current?.focus()}
                                    />
                                </View>
                                <View style={styles.txtipt}>
                                    <Text textAlignVertical={true} style={passwordLabel}> Password </Text>
                                    <TextInput
                                        secureTextEntry={props.showPassword}
                                        style={styles.txtipttxt}
                                        onFocus={props._handleFocusPassword}
                                        onBlur={props._handleBlurPassword}
                                        onChangeText={(text) => props.setPassword(text)}
                                        ref={input1}
                                    />
                                    <TouchableOpacity style={styles.hdion}
                                        onPress={() => props.setShowPassword(!props.showPassword)}>
                                        <Image style={styles.hideiconimg} source={require('../../../assets/password-hide-icon.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => props._handleSignin()}
                                style={styles.signincon}>
                                <Text style={styles.btntxt}> Sign In </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => props.navtoforgotpassword()}
                                style={styles.ndhlp}>
                                <Text style={styles.ndhlptxt}> Need help? </Text>
                            </TouchableOpacity>
                           
                        </KeyboardAvoidingView>
                    </View>
                </View> 
                <TouchableOpacity style={styles.footer}>
                                <TouchableOpacity
                                    onPress={() => props.NavToSignUp()} >
                                    <Text style={styles.lsttxt}> Don't have an account? Sign Up </Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    )
}
export default SignIn;