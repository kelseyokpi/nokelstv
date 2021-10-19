import React from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
import styles from './styles'
import { COMMONTHEMECOLOR } from '../../../utils/constant';

const Help = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: '#111111' }]}>
            <View style={styles.mainvwe}>
                <View style={styles.headbvw}>
                    <TouchableOpacity onPress={() => props.navtodash()} style={styles.headbackimg}>
                        <Image source={require('../../../assets/header-back-btn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navtodash()} style={styles.headerlogo}>
                        <Image source={require('../../../assets/header-logo.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5.2, }}>
                    <ScrollView>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.helptxt}> Help </Text>
                            <View style={styles.questionansvwe}>
                                <Text style={styles.questiontxt}> How many movies can I stream? </Text>
                                <Text style={styles.answertxt}>
                                    You can stream unlimited movies without any limit at any time as often as you want.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={styles.questiontxt}> Can I watch instantly on any device? </Text>
                                <Text style={styles.answertxt}>
                                    You can stream from up to one (1) device at a time,
                                    per account on an all applicable devices when connected to the internet.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={styles.questiontxt}> How can I watch movies on my television? </Text>
                                <Text style={styles.answertxt}>
                                    Our platform has AirPlay and Cast available when using your Apple devices or Google Chromecast.
                                    You can also connect your computer to your TV via an HDMI cable.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={styles.questiontxt}> How fast do videos start playing? </Text>
                                <Text style={styles.answertxt}>
                                    Videos load up instantly when streaming over average internet connection speeds.
                                    Speeds may vary depending on the quality of your internet provider.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={[styles.questiontxt, { lineHeight: 20 }]}>What is the recommended internet connection speed for instant streaming? </Text>
                                <Text style={styles.answertxt}>
                                    Instant streaming is available with all types of internet connection.
                                    We recommend a minimum speed of 500 kbps (please edit this if required)
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={[styles.questiontxt, { lineHeight: 20 }]}>What browsers are supported by NOKELSTV? </Text>
                                <Text style={styles.answertxt}>
                                    All web browsers are supported by our platform, including Internet Explorer,
                                    Google Chrome, Safari, Mozilla Firefox, Opera, etc.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={[styles.questiontxt, { lineHeight: 20 }]}>How often is new content released on NOKELSTV? </Text>
                                <Text style={styles.answertxt}>
                                    We release a minimum of 16 movies each month which are well curated for the most avid movie lovers!
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={[styles.questiontxt, { lineHeight: 20 }]}>How may I contact NOKELSTV? </Text>
                                <Text style={styles.answertxt}>
                                    We are available for all inquires 24/7.
                                    Please contact us via our social media handle @NOKELSTV on Facebook, Instagram, Twitter.
                                </Text>
                            </View>
                            <View style={styles.questionansvwe}>
                                <Text style={[styles.questiontxt, { lineHeight: 20 }]}>How can I cancel my NOKELSTV subscription? </Text>
                                <Text style={styles.answertxt}>
                                    Simply unsubscribe from the ‘Manage profile’ portal.
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}
export default Help;