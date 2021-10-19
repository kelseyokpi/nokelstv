import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, StatusBar } from 'react-native';
import styles from './styles';
const ForgotPasswordotp = (props) => {
    return (
        <ImageBackground
            style={styles.bgdimg}
            source={require("../../../assets/slider1.jpeg")}
        >
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.hdrtccon}>
                    <Text style={styles.hdrtxt}>
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <Image
                        resizeMode={"center"}
                        style={styles.logoimg}
                        source={require("../../../assets/login-logo.png")}
                    />
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={styles.container}
                    >
                        <View style={{ marginTop: 50 }}>
                            <Text style={styles.frgtpc}>
                                Forgot Password?
                            </Text>
                            <View style={styles.txtipt}>
                                <Text
                                    textAlignVertical={true}
                                    style={props.labelStyle}>
                                    Enter Email
                                </Text>
                                <TextInput
                                    style={styles.txtipttxt}
                                    onFocus={props._handleFocusForgotPassword}
                                    onBlur={props._handleBlurForgotPassword}
                                    onChangeText={(EmailAddress) => props.setForgotPassword(EmailAddress)}
                                    value={props.EmailAddress}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            // onPress={() => props.navtostack()}
                            onPress={() => props._handleForgotpassword()}
                            style={styles.signincon}>
                            <Text style={styles.btntxt}>
                                Send Email
                            </Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default ForgotPasswordotp;