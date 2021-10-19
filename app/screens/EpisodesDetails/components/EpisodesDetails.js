import React, { Fragment, useState } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import styles from './style';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import { COMMONBTNCOLOR, COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../utils/constant';
import MediaControls from 'react-native-media-controls';
import Video from 'react-native-video';
import { TextInput } from 'react-native-gesture-handler';
import HTML from "react-native-render-html";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const EpisodesDetails = (props) => {

    const dynamic = { uri: props.MovieTrailor + props.MovieTrailorVideo };
    const local = require('../../../nokelstv.mp4');
    const showVideo = props.EndVideoPlayer ? dynamic : local

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
    function _renderMovieDetails() {
        // alert('_renderMovieDetails')
    }
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
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
                        <TouchableOpacity
                            onPress={() => props.navtoTvshows()}
                            style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>TV Shows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navtoTvshows()}
                            style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>Movies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navToMylist()}
                            style={{ padding: 5 }}>
                            <Text style={styles.hdrtxt}>MY Lists</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{}}>
                        <Fragment>
                            <Image
                                source={{
                                    uri: props.Url.poster_url + props.dataget.episode_poster
                                }}
                                resizeMode={"contain"}
                                style={styles.mainimg}
                            />
                        </Fragment>
                    </View>
                    <View style={styles.txtvw}>
                        <Text style={styles.txtm}>
                            {props.dataget.serial_quality}
                        </Text>
                        <Text style={styles.txt3}>
                            {props.dataget.language}
                        </Text>
                        <Text style={styles.txtbg}>
                            {/* {props.apiData.category} Hollywood */}
                        </Text>
                        <Text style={styles.txt3}>
                            Rating {props.dataget.serial_rating}
                        </Text>
                    </View>
                    <Text style={styles.showntxt}>
                        {/* #10 in TV Shown Today */}
                        {props.dataget.serial_name}
                    </Text>
                    <View style={styles.viewoptions}>
                        <TouchableOpacity
                            onPress={() => props.navToMylist()}>
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/check_icon_pricing.png")}
                            />
                            <Text style={styles.txtvwopt}> My List </Text>
                        </TouchableOpacity>
                        {props.EndVideoPlayer ?
                            // 
                            <TouchableOpacity onPress={() => props.onPressVideoPlay()}>
                                {props.MoviePlay ?
                                    <Image style={{ height: 20, width: 20, left: 3 }}
                                        source={require("../../../assets/moviepause.png")} />
                                    :
                                    <Image style={styles.imgvwopt}
                                        source={require("../../../assets/btn-play-icon.png")} />
                                }
                                <Text style={styles.txtvwopt}> {props.MoviePlay ? 'Stop' : 'Play'} </Text>
                            </TouchableOpacity>
                            :
                            null
                        }
                        <TouchableOpacity>
                            <Image style={styles.imgvwopt}
                                source={require("../../../assets/rating-star-icon-yellow.png")}
                            />
                            <Text style={styles.txtvwopt}>
                                {props.dataget.serial_rating ? props.dataget.serial_rating : `0`}/5
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.WatchMovieStyle}
                        // onPress={() => props.onPressWatch()} >
                        onPress={() => props.onPressWatch(props.dataget.serial_episode)} >
                        {/* onPress={() => props.onPressWatch( props.Url.episode_url + props.dataget.serial_episode)} > */}
                        <Text style={styles.btnstxt}>Watch Now</Text>
                        <Image style={{ width: 25, left: 5, height: 25 }} source={require('../../../assets/mivewwwon.png')} />
                    </TouchableOpacity>
                    <View style={styles.mntxtvw} >
                        <View style={styles.mntxt}>
                            <Text style={styles.mnbgtxt}>
                                {props.dataget.serial_name}
                            </Text>
                            <Text style={styles.mnsmltxt}>
                                {props.dataget.writer}
                            </Text>
                        </View>
                    </View>
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
                onRequestClose={() => props.SetAboutUsModal(false)} >
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

export default EpisodesDetails;