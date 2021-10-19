import React, { useState,useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    FlatList,
    KeyboardAvoidingView,
    Modal
} from 'react-native';
import styles from './styles';
import {
    FONT_FAMILY_BOLD,
    UPPERTXTCOLOR,
    COMMONTXTCOLOR,
    BLACK_COLOR_CODE
} from '../../../utils/constant'
const SignUp = (props) => {
    const input1 = useRef()
    const input2 = useRef()
    const input3 = useRef()
    const input4 = useRef()
    //Name
    const labelStyleName = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedName ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedName ? 17 : 13,
        color: props.isFocusedName ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD
    };
    //Email
    const labelStyleEmail = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedEmail ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedEmail ? 17 : 13,
        color: props.isFocusedEmail ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    //Password
    const labelStylePassword = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedPassword ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedPassword ? 17 : 13,
        color: props.isFocusedPassword ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    //Mobile Number
    const labelStyleMobile = {
        position: 'absolute',
        left: 25,
        top: props.isFocusedMobile ? 22 : 11,
        justifyContent: "center",
        fontSize: props.isFocusedMobile ? 17 : 13,
        color: props.isFocusedMobile ? COMMONTXTCOLOR : UPPERTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD,
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableOpacity
                onPress={() => props.Navtowelcomeslider()}
                style={styles.header}>
                <Image
                    style={{ width: 35, height: 24 }}
                    source={require('../../../assets/header-back-btn.png')} />
            </TouchableOpacity>
            <View style={styles.body}>
                <View style={styles.HeadingTxt}>
                    <Text style={styles.HeadingTxtStyle}>
                        Let's get started with
                    </Text>
                    <Text style={styles.HeadingTxtStyle}>
                        your short details.
                    </Text>
                </View>
                <ScrollView keyboardShouldPersistTaps={'always'}>
                    <View style={styles.txtipt}>
                        <Text textAlignVertical={true}
                            style={labelStyleName}>
                            Name
                        </Text>
                        <TextInput
                            style={styles.txtipttxt}
                            onFocus={props._handleFocusName}
                            onBlur={props._handleBlurName}
                            onChangeText={(text) => props.setName(text)}
                            returnKeyType='next'
                            onSubmitEditing={() => input1?.current?.focus()}
                        />
                    </View>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStyleEmail}
                        >
                            Email
                        </Text>
                        <TextInput
                            style={styles.txtipttxt}
                            onFocus={props._handleFocusEmail}
                            onBlur={props._handleBlurEmail}
                            onChangeText={(text) => props.setEmail(text)}
                            autoCapitalize="none"
                            returnKeyType='next'
                            ref={input1}
                            onSubmitEditing={() => input2?.current?.focus()}
                        />
                    </View>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStylePassword}
                        >
                            Password
                        </Text>
                        <TextInput
                            secureTextEntry={props.showPassword}
                            style={styles.txtipttxt}
                            onFocus={props._handleFocusPassword}
                            onBlur={props._handleBlurPassword}
                            onChangeText={(text) => props.setPassword(text)}
                            ref={input2}
                            returnKeyType='next'
                            onSubmitEditing={() => input3?.current?.focus()}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute', zIndex: 1, right: 0, marginTop: 10, marginRight: 10,
                                padding: 15,
                            }}
                            onPress={() => props.setShowPassword(!props.showPassword)}>
                            <Image style={{ width: 30, height: 30 }} source={require('../../../assets/password-hide-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => props._handleCountryCode()}
                        style={styles.txtipt}>
                        <Text textAlignVertical={true}
                            style={{
                                fontSize: 17,
                                top: 22,left:10,
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_BOLD
                            }}
                        >
                            {props.countryCode ? props.countryCode : 'Select country code'}
                        </Text>
                        <Image style={{ position: 'absolute', right: 20, top: 25 }} source={require('../../../assets/btn-play-icon.png')} />
                    </TouchableOpacity>
                    <View style={styles.txtipt}>
                        <Text
                            textAlignVertical={true}
                            style={labelStyleMobile}
                        >
                            Mobile Number
                        </Text>
                        <TextInput
                            maxLength={10}
                            keyboardType={'number-pad'}
                            style={styles.txtipttxt}
                            onFocus={props._handleFocusMobile}
                            onBlur={props._handleBlurMobile}
                            onChangeText={(text) => props.setMobile(text)}
                            ref={input3}
                            returnKeyType='next'
                            onSubmitEditing={() => input4?.current?.focus()}
                        />
                    </View>
                    {/* <View style={styles.txtipt}> */}
                    {/* <Text
                            textAlignVertical={true}
                            style={labelStyleEmail}
                        >
                            Coupon code
                        </Text> */}
                    {/* <TextInput
                            style={[styles.txtipttxt, {
                                fontSize: 17,
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_BOLD,
                                bottom:8
                            }]}
                            onChangeText={(text) => props.setCouponCode(text)}
                            value={props.CouponCode}
                            placeholder={"Coupon Code"}
                            placeholderTextColor={COMMONTXTCOLOR}
                        /> */}
                    {/* </View> */}

                    
                    <TouchableOpacity onPress={() => props._handleRegion()}
                        style={styles.txtipt}>
                        <Text textAlignVertical={true}
                            style={{
                                fontSize: 17,
                                top: 22,
                                left:10,
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_BOLD
                            }}
                        >
                            {props.CountryName ? props.CountryName : 'Select region'}
                        </Text>
                        <Image style={{ position: 'absolute', right: 20, top: 25 }} source={require('../../../assets/btn-play-icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props._handlesignup()}
                        style={styles.signincon}>
                        <Text style={styles.btntxt}> Sign Up </Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={() => props.Navtosignin()} >
                            <Text style={styles.lsttxt}> Already have an account? Sign In </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Modal
                    animationType="fade"
                    hardwareAccelerated={true}
                    transparent={true}
                    visible={props.ModalVisible}
                    onRequestClose={() => {
                        props.setModalVisible(false)
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{
                                width: '100%',
                                borderBottomWidth: 0.5,
                                borderColor: BLACK_COLOR_CODE,
                            }}>
                                <TextInput
                                    placeholder={"Search your country"}
                                    onChangeText={(text) => props.SearchCountry(text)}
                                    style={styles.TxtInptStyle}
                                />
                                <TouchableOpacity style={styles.TouchableFlse} onPress={() => props.setModalVisible(false)} >
                                    <Image source={require('../../../assets/pricing-uncheck-icon.png')} />
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                data={props.filterCountry}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity key={index} style={styles.MainCntrySlctTouchble} onPress={() => props.OnpressCountry(item)}>
                                        {/* <Text style={styles.CountryText}>+{item.countries_isd_code}</Text> */}
                                        <Text style={styles.CountryText}>{item.countries_name}</Text>
                                    </TouchableOpacity>}
                            />
                        </View>
                    </View>
                </Modal>
         
         
         
                <Modal
                    animationType="fade"
                    hardwareAccelerated={true}
                    transparent={true}
                    visible={props.countryCodeModal}
                    onRequestClose={() => {
                        props._handleCountryCode(false)
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{
                                width: '100%',
                                borderBottomWidth: 0.5,
                                borderColor: BLACK_COLOR_CODE,
                            }}>
                                <TextInput
                                    placeholder={"Search your country"}
                                    onChangeText={(text) => props.SearchCountryCode(text)}
                                    style={styles.TxtInptStyle}
                                />
                                <TouchableOpacity style={styles.TouchableFlse} onPress={() => props._handleCountryCode(false)} >
                                    <Image source={require('../../../assets/pricing-uncheck-icon.png')} />
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                data={props.countryCodeData}
                                renderItem={({ item, index }) =>
                                    <TouchableOpacity key={index} style={styles.MainCntrySlctTouchble} onPress={() => props.OnpressCountryCode(item)}>
                                        {/* <Text style={styles.CountryText}>+{item.countries_isd_code}</Text> */}
                                        <Text style={styles.CountryText}>{item.name} {item.dial_code} </Text>
                                    </TouchableOpacity>}
                            />
                        </View>
                    </View>
                </Modal>
        
            </View>
        </KeyboardAvoidingView>
    )
}
export default SignUp;