import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';
import styles from './styles';
import { BLACK_COLOR_CODE, COMMONBTNCOLOR, COMMONTHEMECOLOR, COMMON_BACKGROUND_COLOR, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../utils/constant';
import { TextInput } from 'react-native-gesture-handler';
const Subscription = (props) => {
    return (
        < ScrollView style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.NavToChoosePlan()}>
                    <Image
                        style={styles.HeaderImgStyle}
                        source={require('../../../assets/header-back-btn.png')}
                    />
                </TouchableOpacity>
                <View style={styles.SubscptnView}>
                    <Text style={styles.SubscptnTxt}>
                        Subscription
                    </Text>
                </View>
            </View>
            <View style={{ flex: 4.5 }}>
                <View style={styles.CHoosePlanView}>
                    <Text style={styles.CHoosePlanTxt}>
                        Choose a plan
                    </Text>
                    <Text style={styles.CHoosePlanTxt}>
                        that's right for you.
                    </Text>
                </View>
                <View style={styles.DrownGradeView}>
                    <Text style={styles.DrownGradeTxt}>
                        Downgrade or upgrade at any time
                    </Text>
                </View>
                <View style={styles.BoxesMainView}>
                    <FlatList
                        data={props.PackageList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => props._renderItems(item, index)}
                    />
                </View>
                <View style={styles.QualityMainView}>
                    <View style={styles.PlanAdvantageTxt}>
                        <View style={{ color: 'red', flexDirection: 'row' }}>
                            {/* {props.SelectedPlan &&
                                <TextInput
                                    style={{
                                        height: 40, borderColor: 'gray',
                                        borderWidth: 1,
                                        backgroundColor: 'red'
                                    }}
                                    onChangeText={text => props.setCouponCode(text)}
                                    value={props.setCouponCode}
                                />
                            } */}
                            {/* <TextInput
                                style={styles.couponvwebx}
                                onChangeText={text => props._handleCouponCode(text)}
                                value={props.couponCode}
                                maxLength={20}
                                placeholder={"Enter Coupon Code"}
                                placeholderTextColor={WHITE_COLOR_CODE}
                            /> */}
                            <TextInput
                                style={styles.couponvwebx}
                                onChangeText={text => props.setCouponCode(text)}
                                value={props.setCouponCode}
                                maxLength={20}
                                placeholder={"Enter Coupon Code"}
                                placeholderTextColor={WHITE_COLOR_CODE}
                            />
                            <TouchableOpacity
                                onPress={() => props.navtoCoupon()}
                                style={styles.coupontouchvwe}>
                                <Image
                                    style={{ width: 30, height: 30 }}
                                    source={require('../../../assets/header-logout-icon.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text style={{
                            fontFamily: FONT_FAMILY_REGULAR, fontSize: 16,
                            color: props.isCouponValid === 1 ? 'green' : 'red'
                        }}>
                            {props.isCouponValid === 0 ?
                                ''
                                : props.isCouponValid === 1 ?
                                    "Your coupon code is Valid."
                                    : "Your coupon code is In-vaild."
                            }
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1.5, justifyContent: 'flex-end', paddingBottom: 20 }}>
                <TouchableOpacity
                    onPress={() => props.SelectedPlan === "" ? '' : props.NavToSignUp()}
                    style={[styles.contTouch, { backgroundColor: props.SelectedPlan === "" ? '#e6e6e6' : COMMONTHEMECOLOR }]}>
                    <Text style={[styles.contTXT, { color: props.SelectedPlan === "" ? BLACK_COLOR_CODE : WHITE_COLOR_CODE }]}>
                        CONTINUE
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Subscription;