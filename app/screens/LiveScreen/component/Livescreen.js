import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const windowHeight = Dimensions.get('window').height;
import styles from './styles'
import { FONT_FAMILY_REGULAR, BLACK_COLOR_CODE } from '../../../utils/constant';
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
_renderItem = ({ item, props }) => {
    return (
        <ImageBackground
            style={{
                flex: 1,
            }}
            source={item.ImageBackground}
        />
    )
}
function LiveScreen(props) {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} />
            <View style={styles.header}>
                <View style={{
                    position: 'absolute',
                    zIndex: 1,
                    marginTop: 25,
                    marginLeft: 20,
                    flexDirection: 'row'
                }} >
                    <TouchableOpacity style={{ marginTop: 2.5 }}
                    onPress={()=>props.navtoback()}
                    >
                    <Image
                       
                        source={
                            require('../../../assets/header-back-btn.png')
                        }
                    />
                    </TouchableOpacity>
                    <Text style={styles.liveTxt}>
                        Live
                    </Text>
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <AppIntroSlider
                    renderItem={(item) => _renderItem(item)}
                    data={slides}
                    showNextButton={false}
                    showDoneButton={false}
                    activeDotStyle={{
                        backgroundColor: "#b0b0b0",
                        marginTop: windowHeight / 20,
                        backgroundColor: BLACK_COLOR_CODE
                    }}
                    dotStyle={{
                        backgroundColor: "#474747",
                        marginTop: windowHeight / 20,
                        backgroundColor: "#533d2c"
                    }}
                    style={{ height: windowHeight / 3 }}
                />
                <View style={styles.body}>
                    <View>
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Previews
                            </Text>
                            <TouchableOpacity>
                                <Text style={styles.pretxt}>
                                    See all
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    onPress={() => props.navToLiveDetails()}
                                    style={{ margin: 5, height: 120 }}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={item.MoviePoster} />
                                </TouchableOpacity>
                            )}
                        />
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Nokels TV - 3rd July
                        </Text>
                            <TouchableOpacity>
                                <Text style={styles.pretxt}>
                                    See all
                        </Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={item.MoviePoster} />
                                    <Text
                                        style={styles.movienamerct}
                                    >{item.MovieTitle}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Nokels TV - 30th July
                        </Text>
                            <Text style={styles.pretxt}>
                                See all
                        </Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={item.MoviePoster} />
                                    <Text
                                        style={styles.movienamerct}
                                    >{item.MovieTitle}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        {/* circleIMAGE */}
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Live TV
                        </Text>
                            <Text style={styles.pretxt}>
                                See all
                        </Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5, height: 120 }}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={item.MoviePoster} />
                                </TouchableOpacity>
                            )}
                        />
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Nokels TV - 2nd July
                        </Text>
                            <Text style={styles.pretxt}>
                                See all
                        </Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={item.MoviePoster} />
                                    <Text
                                        style={styles.movienamerct}
                                    >{item.MovieTitle}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <View style={styles.mainViewTXT}>
                            <Text style={styles.hdgtxt}>
                                Nokels TV - 28th July
                        </Text>
                            <Text style={styles.pretxt}>
                                See all
                        </Text>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={item.MoviePoster} />
                                    <Text
                                        style={styles.movienamerct}
                                    >{item.MovieTitle}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default LiveScreen;