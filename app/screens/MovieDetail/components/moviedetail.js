import React, { Fragment, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';
import styles from './style';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import { COMMONBTNCOLOR, COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../utils/constant';
import MediaControls from 'react-native-media-controls';
import Video from 'react-native-video';
import HTML from "react-native-render-html";
import VideoPlayer from '../../../component/VideoPlayer';
import FastImage from 'react-native-fast-image';
import moment from 'moment'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MovieDetail = (props) => {

    const dynamic = { uri: props.MovieTrailor + props.MovieTrailorVideo };
    const local = require('../../../nokelstv.mp4');
    //const showVideo = props.EndVideoPlayer ? dynamic : local
    const [showVideo, setShowVideo] = useState('')
    const [endLocalVideo, setEndLocalVideo] = useState(false)
    //const [control, setControl] = useState(false)

    useEffect(() => {
        setShowVideo(endLocalVideo ? dynamic : local)
    }, [endLocalVideo])

    const onEndVideo = (onEnd) => {
        setEndLocalVideo(true)
        //setControl(true)
    }

    const handelHideBackButton = (data) => {

    }

    const CustomRatingBar = () => {
        return (
            <View style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                paddingHorizontal: 10,
                alignItems: 'center'
            }}>
                {props.maxRating.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => props.setDefaultRating(item)} >
                            <Image style={{ resizeMode: 'cover', width: 40, height: 40, margin: 5 }}
                                source={
                                    item <= props.defaultRating
                                        ?
                                        require("../../../assets/rating-star-icon-yellow.png")
                                        :
                                        require("../../../assets/star.png")
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} >
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ padding: 10 }}
                        onPress={() => props.onnavtodashboard()}
                    >
                        <Image source=
                            {require("../../../assets/header-back-btn.png")}
                        />
                    </TouchableOpacity>
                    <Image
                        source={require("../../../assets/header-logo.png")}
                    />
                    <View style={styles.hdrview}>
                        {/* <TouchableOpacity
                            onPress={() => props.navtoTvshows()}
                            style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>TV Shows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navtoTvshows()}
                            style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>Movies</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity
                            onPress={() => props.navToMylist()}
                            style={{ padding: 5, marginRight: 10 }}>
                            <Text style={styles.hdrtxt}>MY Lists</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.body]}>
                    {props.MoviePlay ?
                        <View style={{
                            height: height / 2,
                        }}>
                            {!endLocalVideo ?
                                <VideoPlayer
                                    videoUrl={local}
                                    /*videoStyle={{
                                        width: '100%', backgroundColor: 'black',
                                        //height:height - 350,
                                    }}*/
                                    hasfull={true}
                                    onEndVideo={onEndVideo}
                                    setControl={false}
                                    handelHideBackButton={handelHideBackButton}
                                />
                                :
                                <VideoPlayer
                                    videoUrl={dynamic}
                                    /*videoStyle={{
                                        width: '100%', backgroundColor: 'black',
                                        //height:height - 350,
                                    }}*/
                                    hasfull={true}
                                    onEndVideo={onEndVideo}
                                    setControl={true}
                                    handelHideBackButton={handelHideBackButton}
                                />
                            }

                        </View>
                        :
                        <View style={{}}>
                            <Fragment>
                                <ActivityIndicator
                                    size="large" color={COMMONTHEMECOLOR}
                                    style={{
                                        marginTop: 20, position: 'absolute', zIndex: 1, right: 0, top: 0,
                                        bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center'
                                    }}
                                    animating={props.profileLoader}
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                />
                                {/* <Image
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                    source={props.url.movie_poster_url + props.dataget.movie_poster ?
                                        { uri: props.url.movie_poster_url + props.dataget.movie_poster }
                                        : require('../../../assets/header-logo.png')
                                    }
                                    resizeMode={"contain"}
                                    style={styles.mainimg}
                                /> */}

                                {

                                    (props?.url?.movie_poster_url && props?.dataget?.movie_poster) ?

                                        <FastImage
                                            style={styles.mainimg}
                                            source={{ uri: props.url.movie_poster_url + props.dataget.movie_poster }}
                                            resizeMode={FastImage.resizeMode.contain}
                                        />
                                        :
                                        <View style={{
                                            justifyContent: 'center', alignItems: 'center', padding: 13,
                                            marginBottom: '6%', height: 200
                                        }}>

                                            <FastImage
                                                style={{ width: 100, height: 100, }}
                                                source={require('../../../assets/header-logo.png')}
                                            //resizeMode={FastImage.resizeMode.contain}
                                            />
                                        </View>

                                }

                            </Fragment>
                        </View>
                    }
                    <View style={styles.viewoptions}>
                        <TouchableOpacity style={{ padding: 8 }}
                            onPress={() => props.navToMylist()}>
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/check_icon_pricing.png")}
                            />
                            <Text style={styles.txtvwopt}> My List </Text>
                        </TouchableOpacity>
                        {/* add this on showing playing btn */}
                        {/* {props.EndVideoPlayer ? */}
                        <TouchableOpacity style={{ padding: 8, paddingLeft: 0 }}
                            onPress={() => props.onPressVideoPlay()}>
                            {props.MoviePlay ?
                                <Image style={{ height: 20, width: 20, left: 5 }}
                                    source={require("../../../assets/moviepause.png")} />
                                :
                                <Image style={styles.imgvwopt}
                                    source={require("../../../assets/btn-play-icon.png")} />
                            }
                            <Text style={styles.txtvwopt}> {props.MoviePlay ? 'Stop' : 'Play'} </Text>
                        </TouchableOpacity>
                        {/* :
                            null
                        } */}
                        <TouchableOpacity style={{ padding: 8 }} >
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/rating-star-icon-yellow.png")}
                            />
                            <Text style={styles.txtvwopt}>
                                {props.dataget.movie_rating ? props.dataget.movie_rating : `0`}/5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ padding: 8 }}
                            // onPress={() => props.onPressRate()} 
                            onPress={() => props.openPopupRateUs(true)} >
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/rating-star-icon-white.png")} />
                            <Text style={styles.txtvwopt}> Rate This </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 8, paddingRight: 10 }} onPress={() => props.openAboutInfo(true)}>
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/information-icon.png")} />
                            <Text style={styles.txtvwopt}> Info </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.watchvwe}>
                        <TouchableOpacity style={styles.WatchMovieStyle}
                            onPress={() => props.onPressWatch()} >
                            <Text style={styles.btnstxt}>Watch Now</Text>
                            <Image style={{ width: 25, left: 5, height: 25 }} source={require('../../../assets/mivewwwon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.mntxtvw} >
                        <View style={styles.mntxt}>
                            <Text style={styles.mnbgtxt}>
                                {props.dataget.movie_name}
                            </Text>
                            <Text style={styles.mnsmltxt}>
                                {
                                    moment(props.dataget.release_date).format('DD/MM/YYYY')
                                }
                            </Text>
                        </View>
                        {props.favourite === 0 ?
                            <TouchableOpacity onPress={() => props.addFafourite(1)} style={styles.mntxtimg}>
                                <Image resizeMode={"contain"} source={require("../../../assets/heart-icon.png")} />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => props.addFafourite(0)} style={styles.mntxtimg}>
                                <Image resizeMode={"contain"} source={require("../../../assets/heart-icon-select.png")} />
                            </TouchableOpacity>
                        }

                    </View>
                    <View style={styles.allbtnsvw}>
                        <TouchableOpacity style={styles.btnsvw}>
                            <Text style={styles.btnstxt}>
                                {props.vdataget ? props.vdataget : null}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Text style={styles.hdng}> Previews </Text> */}
                    <>
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.related}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={{
                                            uri: props.url.movie_poster_url + item.movie_poster
                                        }} />
                                </TouchableOpacity>
                            )}
                        /> */}
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={item.MoviePoster} />
                                </TouchableOpacity>
                            )}
                        /> */}
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.related}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5,backgroundColor:'red' }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={{
                                            uri: 'file://' + item.category_path_name
                                            //    uri: props.url.movie_poster_url + item.movie_poster
                                        }} />
                                </TouchableOpacity>
                            )}
                        /> */}
                    </>
                    {/* <Text style={styles.hdng}> My Lists </Text>
                    <>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
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
                    </> */}
                    {/* <Text style={styles.hdng}>
                        Trending Now
                    </Text> */}
                    <>
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.MOVIEDATA}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
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
                        /> */}
                        {/* <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.related}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
                                    <Image
                                        style={styles.imgfltlst2}
                                        source={{
                                            uri: props.url.movie_poster_url + item.movie_poster
                                        }} />
                                </TouchableOpacity>
                            )}
                        /> */}
                    </>
                    <Text style={styles.hdng}> Related </Text>
                    {/* {props.dataget.movie_related.movie_poster} */}
                    <>
                        {/* <TouchableOpacity  onPress={()=>props.onnavtoseeall()}> */}
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            data={props.related}
                            horizontal={true}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (

                                <TouchableOpacity onPress={() => props.onnavtomoviedetail(item)} style={{ margin: 5 }}>
                                    <Image style={styles.imgfltlst2}
                                        source={{
                                            uri: props.url.movie_poster_url + item.movie_poster
                                        }} />
                                </TouchableOpacity>
                            )}
                        />
                    </>
                </View>
            </ScrollView>
            <Dialog
                visible={props.RatingModal}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                width={0.8}
                transparent={true}
                onTouchOutside={() => {
                    ``
                    props.setRatingModal(false)
                }}
                onRequestClose={() => props.setRatingModal(false)}
            >
                <DialogContent style={{ backgroundColor: WHITE_COLOR_CODE, }}>
                    <View style={styles.rtevwe}>
                        <TouchableOpacity onPress={() => props.closeModalRateUs()}
                            style={styles.closetosetouch}>
                            <Image style={styles.closeimg} source={require('../../../assets/pricing-uncheck-icon.png')} />
                        </TouchableOpacity>
                        <Text style={{
                            fontFamily: FONT_FAMILY_REGULAR,
                            fontSize: 17,
                            color: COMMONBTNCOLOR,
                        }}>
                            {props.defaultRating === 1 && "Poor"}
                            {props.defaultRating === 2 && "Good"}
                            {props.defaultRating === 3 && "Very Good"}
                            {props.defaultRating === 4 && "Excellent"}
                            {props.defaultRating === 5 && "Un-Believable"}
                        </Text>
                        <CustomRatingBar />
                        <View style={styles.inputtxtvwe}>
                            <TextInput
                                onChangeText={(text) => props.setRateUs(text)}
                                value={props.rateUs}
                                multiline
                                numberOfLines={3}
                                placeholder={'Write a Review'}
                                style={{ height: 100 }}
                            />
                        </View>
                        <View style={{ paddingTop: 15, }}>
                            <TouchableOpacity onPress={() => props._handleRateus()} style={styles.ratebtn}>
                                <Text style={styles.rtetxt}> Rate Us </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DialogContent>
            </Dialog>
            {/* INFO */}
            <Dialog
                visible={props.aboutUsModal}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                width={0.8}
                transparent={true}
                onTouchOutside={() => {
                    props.SetAboutUsModal(false)
                }}
                onRequestClose={() => props.SetAboutUsModal(false)}>
                <DialogContent style={{ backgroundColor: WHITE_COLOR_CODE, }}>
                    <View style={{ padding: 8 }}>
                        <View style={{ margin: 5 }}>
                            {/* <Text style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 14, lineHeight: 20,
                                color: LIGHT_GREY_COLOR_CODE }}>
                                { props.dataget.about_movie }
                            </Text> */}
                            <HTML style={{ fontFamily: FONT_FAMILY_REGULAR, fontSize: 15 }}
                                source={{ html: props.dataget.about_movie }}
                            />
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props._handleCancel()}
                                style={{
                                    height: 30, width: "50%", alignSelf: "center", borderRadius: 10,
                                    backgroundColor: COMMONBTNCOLOR, justifyContent: "center", top: 15
                                }}>
                                <Text style={{
                                    alignSelf: "center", color: WHITE_COLOR_CODE,
                                    fontSize: 15, fontFamily: FONT_FAMILY_REGULAR
                                }}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DialogContent>
            </Dialog>

        </View >
    )
}

export default MovieDetail;