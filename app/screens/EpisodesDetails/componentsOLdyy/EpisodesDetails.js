import React, { useState, Fragment } from 'react';
import {
    Text,
    View,
    Image,
    FlatList,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview'
import styles from './style'
import { COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, LIGHT_GREY_COLOR_CODE }
    from '../../../utils/constant';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const TvShowDetails = (props) => {

    const dynamic = { uri: props.MovieTrailor + props.MovieTrailorVideo };
    const local = require('../../../nokelstv.mp4');
    const showVideo = props.EndVideoPlayer ? dynamic : local
    const [selectedValue, setSelectedValue] = useState("Season");
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);

    function _handleIsSelected(index, item) {
        setIsSelectedCatgory(index)
        props.setType(item.id);
    }
    const data = [{ value: 1, id: 1 }, { value: 2, id: 2 }, { value: 3, id: 3 }]
    function _renderItems(item, index) {
        const selectedBgColor = index === isSelectedCatgory ? COMMONTHEMECOLOR : '#2e2e2e';
        const selectedColor = index === isSelectedCatgory ? COMMONTHEMECOLOR : LIGHT_GREY_COLOR_CODE;
        const lablestyle = {
            flexDirection: 'row',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 15,
            justifyContent: "center",
            alignItems: "center",
            height: 35,
            borderTopWidth: 1,
            borderColor: selectedBgColor,
        }
        const txtCat = {
            fontSize: 14,
            fontFamily: FONT_FAMILY_REGULAR,
            color: selectedColor, marginLeft: 15
        }
        return (
            <TouchableOpacity
                onPress={() => _handleIsSelected(index, item)}
                style={lablestyle}>
                <Text style={txtCat}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.goBack()}
                    // onPress={() => props.onnavtomoviedetail()}
                    style={styles.hdrimg}>
                    <Image source={require("../../../assets/header-back-btn.png")}
                    />
                </TouchableOpacity>
                <Image style={styles.hdrlogo}
                    source={require("../../../assets/header-logo.png")} />
            </View>
            <View style={[styles.body]}>
                <ScrollView
                    style={{ flexGrow: 5 }}
                    showsVerticalScrollIndicator={false}>
                    {/* <Image resizeMode={"stretch"} style={styles.mainimg}
                        source={{ uri: props.baseURL.banner_url + props.apiData.serial_banner }}
                    /> */}
                    {props.MoviePlay ?
                        <View>
                            <Video
                                onEnd={props.onEnd}
                                onLoad={props.onLoad}
                                onLoadStart={props.onLoadStart}
                                onProgress={props.onProgress}
                                paused={props.paused}
                                ref={props.videoPlayer}
                                // resizeMode={props.screenType}
                                source={showVideo}
                                // source={require('../../../nokelstv.mp4')}
                                // source={{ uri: props.MovieTrailor + props.MovieTrailorVideo }}
                                fullscreen={true}
                                volume={10}
                                resizeMode={'contain'}
                                style={{
                                    height: props.ShowFullscreen ? height : height - 350,
                                    width: '100%', backgroundColor: 'black'
                                }}
                            />
                            {props.EndVideoPlayer ?
                                <MediaControls
                                    duration={props.duration}
                                    isLoading={props.isLoading}
                                    mainColor={COMMONTHEMECOLOR}
                                    onPaused={props.onPaused}
                                    onReplay={props.onReplay}
                                    isFullScreen={props.isFullScreen}
                                    onSeek={props.onSeek}
                                    onSeeking={props.onSeeking}
                                    onFullScreen={props.onFullScreen}
                                    playerState={props.playerState}
                                    progress={props.currentTime}
                                    toolbar={props.renderToolbar()}
                                    showOnStart={true}
                                /> : null}
                        </View>
                        :
                        <View style={{}}>
                            <Fragment>
                                <ActivityIndicator
                                    size="large" color={COMMONTHEMECOLOR}
                                    style={{
                                        marginTop: 20, position: 'absolute', zIndex: 1, right: 0,
                                        top: 0, bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center'
                                    }}
                                    animating={props.profileLoader}
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                />
                                <Image
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                    source={{
                                        uri: props.baseURL.banner_url + props.apiData.serial_banner
                                    }}
                                    resizeMode={"contain"}
                                    style={styles.mainimg}
                                />
                            </Fragment>
                        </View>
                    }
                    <View style={styles.txtvw}>
                        <Text style={styles.txtm}>
                            {props.apiData.serial_quality}
                        </Text>
                        <Text style={styles.txt3}>
                            {props.apiData.language_name}
                        </Text>
                        <Text style={styles.txtbg}>
                            {props.apiData.category}
                        </Text>
                        <Text style={styles.txt3}>
                            {props.apiData.serial_rating} Rating
                        </Text>
                    </View>
                    <Text style={styles.showntxt}>
                        {/* #10 in TV Shown Today */}
                        {props.apiData.serial_name}
                    </Text>
                    {/* <TouchableOpacity style={styles.plybtn}>
                        <Image
                            style={styles.plyimgbtn}
                            source={require("../../../assets/play-icon.png")}
                        />
                        <Text style={styles.plybtntxt}>
                            Play
                    </Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.plybtn}
                        onPress={() => props.onPressVideoPlay()}
                    // onPress={() => props.onPressTvVideoPlay()}
                    >
                        {props.MoviePlay ?
                            <Image
                                style={{ height: 20, width: 20, left: 3 }}
                                source={require("../../../assets/moviepause.png")}
                            /> :
                            <Image
                                style={styles.imgvwopt}
                                source={require("../../../assets/btn-play-icon.png")}
                            />}
                        <Text style={styles.plybtntxt}>
                            {props.MoviePlay ? 'Stop' : 'Play'}
                        </Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.dwldbtn}>
                        <Image
                            style={styles.plyimgbtn}
                            source={require("../../../assets/list-download-icon.png")}
                        />
                        <Text style={styles.plybtntxt}>
                            Download S1:E1
                    </Text>
                    </TouchableOpacity> */}
                    <WebView style={{ height: "auto", }} originWhitelist={['*']}
                        source={{ html: props.apiData.about_serial }}
                    />
                    {/* <Text style={styles.whtrgltxt}> */}
                    {/* </Text> */}

                    <View style={styles.txtvwp}>
                        <Text style={styles.whtrgltxt}>
                            Category :
                       </Text>
                        <Text style={styles.txtans}>
                            {props.apiData.type_of_movi}
                            {/* Engin Altan Duzyatan, Serdar Koghan Hulya */}
                        </Text>
                    </View>
                    <View style={styles.txtvwp}>
                        <Text style={styles.whtrgltxt}>
                            Creator :
                        </Text>
                        <Text style={styles.txtans}>
                            {props.apiData.director}
                        </Text>
                    </View>
                    <View style={styles.headingbtn}>
                        <View flex={3.5} >
                            <FlatList
                                data={props.MainHeadingData}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={{ flex: 1, flexGrow: 0 }}
                                contentContainerStyle={{ justifyContent: "space-between" }}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => _renderItems(item, index)}
                            />
                        </View>
                        {/* <View style={styles.headingbtninr}> */}
                        {/* <Picker
                                // selectedValue={selectedValue}
                                style={{ height: 20, width: 120, color: COMMONTHEMECOLOR }}
                                itemStyle={{ backgroundColor: "#11bfbe" }}
                                pickerStyleType={{ color: COMMONTHEMECOLOR }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                {
                                    // console.log(props.seasonData.data)
                                    props.seasonData.map((item) => {
                                        return (
                                            <Picker.Item label={item.title_season} value={item.id} />
                                        )
                                    })
                                }
                            </Picker> */}
                        {/* </View> */}
                    </View>
                    {props.type === 1 ?
                        <FlatList
                            data={props.SERIALLISTDATA}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.txtvwp}>
                                        <TouchableOpacity
                                            onPress={() => props.onPressEpisode(item.serial_episode)}
                                            style={styles.imgvwfltlst}>
                                            <Image
                                                resizeMode={"cover"}
                                                style={styles.imgfltlst}
                                                source={{
                                                    uri: props.SERIALLISTURL.poster_url + item.episode_poster
                                                }
                                                }
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => props.onPressEpisode(item.serial_episode)}
                                            style={styles.txtvwfltlst}>
                                            <Text style={styles.txtfltlst1}>
                                                Episode {item.episode_no}
                                            </Text>
                                            {/* <Text style={styles.txtfltlst2}>
                                            {item.fltlsttxt2}45m </Text> */}
                                        </TouchableOpacity>
                                        {/* <View style={styles.dwldimgfltlst}>
                                        <Image
                                            style={styles.dwldfltlst}
                                            source={require('../../../assets/btn-download-icon.png')}
                                        />
                                    </View> */}
                                    </View>
                                    {/* <WebView
                                        style={styles.whtrgltxt}
                                        originWhitelist={['*']}
                                        source={{ html: item.about_episode }}
                                    /> */}
                                    <Text
                                        style={styles.whtrgltxt}>
                                        {item.about_episode}
                                    </Text>
                                </>
                            )}
                        /> : null
                    }
                    {props.type === 2 ?
                        <FlatList
                            data={props.serialrelated}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.txtvwp}>
                                        <TouchableOpacity
                                            onPress={() => props.onPressSerialDEtail(item)}
                                            style={styles.imgvwfltlst}>
                                            <Image
                                                resizeMode={"cover"}
                                                style={styles.imgfltlst}
                                                source={{ uri: props.SERIALLISTURL.poster_url + item.serial_poster }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => props.onPressSerialDEtail(item)}
                                            style={styles.txtvwfltlst}>
                                            <Text style={styles.txtfltlst1}> {item.serial_name} </Text>
                                            {/* <Text style={styles.txtfltlst2}>
                                            {item.fltlsttxt2}45m
                                        </Text> */}
                                        </TouchableOpacity>
                                        {/* <View style={styles.dwldimgfltlst}>
                                        <Image
                                            style={styles.dwldfltlst}
                                            source={require('../../../assets/btn-download-icon.png')}
                                        />
                                    </View> */}
                                    </View>
                                    {/* <WebView
                                        style={styles.whtrgltxt}
                                        originWhitelist={['*']}
                                        source={{ html: item.about_episode }}
                                    /> */}
                                    {/* <Text
                                    style={styles.whtrgltxt}>
                                     {item.about_episode}
                                </Text>  */}
                                </>
                            )}
                        />
                        : null
                    }
                    {
                        // props.type === 3 ?
                        //     props._handleSeasonApiList()
                        //     :
                        //     null

                        props.type === 3 ?
                        <FlatList
                            data={props.SEASONDATA}
                            renderItem={({ item, index }) => (
                                <>
                                    <View style={styles.txtvwp}>
                                        <TouchableOpacity 
                                         onPress={() => props.navtoSeasonDetails(item)}
                                            style={styles.imgvwfltlst}>
                                            <Image resizeMode={"cover"} style={styles.imgfltlst}
                                                source={{ uri: props.baseURL.session_poster_url + item.season_poster }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => props.navtoSeasonDetails(item)}
                                            //    onPress={()=>props.onPressSerialDEtail(item)}
                                            style={styles.txtvwfltlst}>
                                            <Text style={styles.txtfltlst1}>
                                                {item.title_season}
                                            </Text>
                                            <Text style={styles.txtfltlst2}>
                                                Season -{++index}
                                            </Text>
                                        </TouchableOpacity>
                                        {/* <View style={styles.dwldimgfltlst}>
                                        <Image
                                            style={styles.dwldfltlst}
                                            source={require('../../../assets/btn-download-icon.png')}
                                        />
                                    </View> */}
                                    </View>
                                </>
                            )}
                        />
                        : null
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default TvShowDetails;