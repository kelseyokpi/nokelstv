import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import styles from './styles';
import {
    COMMONTXTCOLOR,
    FONT_FAMILY_REGULAR
} from '../../../utils/constant';
const ChoosePlan = (props) => {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../../assets/PLanImg.png')} >
            <View style={styles.header}>
                <Image style={styles.logoimg}
                    source={require('../../../assets/header-logo-white.png')} />
                <View style={styles.hdrscdvw}>
                    <TouchableOpacity style={styles.hdrtxt}>
                        <Image
                            source={require('../../../assets/header-question-icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navtologout()}
                        style={styles.hdrtxt}>
                        <Image
                            source={require('../../../assets/header-logout-icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={{ flex: 4, padding: 20 }}>
                    <View style={{ marginTop: 30, marginLeft: 20 }}>
                        <Image
                            source={require('../../../assets/pricing-circle-check-icon.png')} />
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20 }}>
                        <Text style={{
                            color: COMMONTXTCOLOR,
                            fontFamily: FONT_FAMILY_REGULAR,
                            fontSize: 18
                        }}>STEP 1 OF 3</Text>
                        <Text style={{
                            color: COMMONTXTCOLOR,
                            fontFamily: FONT_FAMILY_REGULAR,
                            fontSize: 28,
                            marginTop: 5
                        }}>Welcome Back</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image
                                style={{ top: 10 }}
                                source={require('../../../assets/my-list-icon.png')} />
                            <Text style={{
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_REGULAR,
                                fontSize: 16,
                                marginLeft: "2%"
                            }}>No commitments, cancel anytime.</Text>
                        </View>
                        <View
                            style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image
                                style={{ top: 10 }}
                                source={require('../../../assets/my-list-icon.png')} />
                            <Text style={{
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_REGULAR,
                                fontSize: 16,
                                marginTop: 5,
                                marginLeft: '2%'
                            }}>Everything on Nokels TV</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Image style={{
                                top: 10,
                                height: 15,
                            }} source={require('../../../assets/my-list-icon.png')} />
                            <Text style={{
                                color: COMMONTXTCOLOR,
                                fontFamily: FONT_FAMILY_REGULAR,
                                fontSize: 16,
                                marginTop: 5,
                                marginLeft: '2%'
                            }}>No ads and no extra fees. Ever.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    onPress={() => props.NavToSubscription()}
                    style={styles.PlayBtnView}>
                    <Text style={styles.PlayBtnViewTxt}>SEE THE PLANS</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default ChoosePlan;