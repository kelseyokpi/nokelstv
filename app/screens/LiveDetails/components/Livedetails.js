import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    ImageBackground,
} from 'react-native';
import IconLR from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import AppIntroSlider from 'react-native-app-intro-slider';
import {
    WHITE_COLOR_CODE,
    FONT_FAMILY_BOLD,
    FONT_FAMILY_REGULAR
} from '../../../utils/constant';
const windowHeight = Dimensions.get('window').height;
const LiveDetails = (props) => {
    function _renderItems(item, index) {
        const lablestyle = {
            margin: 15,
            justifyContent: "space-between",
            alignItems: "center",
        }
        const txtCat = {
            fontSize: 16,
            fontFamily: FONT_FAMILY_BOLD,
            color: WHITE_COLOR_CODE

        }
        const txttime = {
            fontSize: 14,
            fontFamily: FONT_FAMILY_REGULAR,
            color: "#686868"
        }
        return (
            <TouchableOpacity
                style={lablestyle}>
                <Text style={txtCat}>{item.name}</Text>
                <Text style={txttime}>{item.time}</Text>
            </TouchableOpacity>
        )
    }
    const slides = [
        {
            key: 1,
            ImageBackground: require('../../../assets/marvel.jpeg'),
        },
        {
            key: 2,
            ImageBackground: require('../../../assets/Screen-Shot-2019-11-10-at-9.54.13-AM.png')
        },
        {
            key: 3,
            ImageBackground: require('../../../assets/header-banner-bg-l2.png'),
        },
        {
            key: 4,
            ImageBackground: require('../../../assets/header-banner-bg.png'),
        },
        {
            key: 5,
            ImageBackground: require('../../../assets/marvel.jpeg'),
        },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppIntroSlider
                    renderItem={(item) => _renderItem(item)}
                    data={slides}
                    showNextButton={false}
                    showDoneButton={false}
                    activeDotStyle={{
                        backgroundColor: "#b0b0b0",
                        marginTop: windowHeight / 20
                    }}
                    dotStyle={{
                        backgroundColor: "#474747",
                        marginTop: windowHeight / 20
                    }}
                />
            </View>
            <View style={styles.body}>
                <View style={styles.haqmainview}>
                    <View style={styles.View}>
                        <View style={{ flex: 5, paddingLeft: "5%" }}>
                            <Text style={styles.haqTXT}>
                                Haqiqat kya Hai? / Super 100
                            </Text>
                            <Text style={styles.txtView}>
                                Sat 04 Jul
                    </Text>
                        </View>
                        <View style={styles.informationIconIMG}>
                            <Image
                                source={
                                    require('../../../assets/information-icon.png')
                                }
                            />
                        </View>
                    </View>
                </View>
                <ImageBackground
                    source={require("../../../assets/bg.png")}
                    style={{ flex: 1 }}>
                    <View style={{ marginTop: 8 }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            paddingLeft: "33%",
                            paddingRight: "33%"
                        }}>
                            <IconLR name='left' size={18} color='#ffffff' />
                            <Text style={styles.TodayTXT}>
                                TODAY
                        </Text>
                            <IconLR name='right' size={18} color='#ffffff' />
                        </View>
                        <TouchableOpacity
                            style={styles.signincon}>
                            <Text style={styles.btntxt}>
                                NOW PLAYING
                        </Text>
                        </TouchableOpacity>
                        <View>
                            <FlatList
                                data={props.MainHeadingData}
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => _renderItems(item, index)}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingTop: 10 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={props.MOVIEDATA}
                                horizontal={true}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={{ margin: 5 }}>
                                        <View style={{
                                            padding: 10,
                                            borderRadius: 50, margin: 0
                                        }}>
                                            <Image
                                                style={styles.imgfltlst}
                                                source={item.MoviePoster} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        <TouchableOpacity style={styles.channelView}>
                            <Image
                                source={require("../../../assets/menubar.png")}
                            />
                            <View>
                                <Text style={styles.channeltxt}>
                                    CHANNEL LIST
                        </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </View >
    )
}
export default LiveDetails;