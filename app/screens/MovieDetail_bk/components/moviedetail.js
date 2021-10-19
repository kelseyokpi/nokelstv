import React, { Fragment } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList, ScrollView, 
    Dimensions, ActivityIndicator } from 'react-native';
import styles from './style';
import Dialog, { DialogContent, SlideAnimation, } from 'react-native-popup-dialog';
import { COMMONTHEMECOLOR, WHITE_COLOR_CODE } from '../../../utils/constant';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const MovieDetail = (props) => {

    const dynamic = { uri: props.MovieTrailor + props.MovieTrailorVideo };
    const local = require('../../../nokelstv.mp4');
    const showVideo = props.EndVideoPlayer ? dynamic : local

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
                        <TouchableOpacity style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>TV Shows</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>Movies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>props.navToMylist()}
                         style={{ padding: 5 }} >
                            <Text style={styles.hdrtxt}>MY Lists </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.body]}>
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
                                    style={{ marginTop: 20, position: 'absolute', zIndex: 1, right: 0, top: 0,
                                     bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
                                    animating={props.profileLoader}
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                />
                                <Image
                                    onLoadStart={() => props.onLoadPosterStart()}
                                    onLoadEnd={() => props.onLoadEnd()}
                                    source={{
                                        uri: props.url.movie_poster_url + props.dataget.movie_poster
                                    }}
                                    resizeMode={"contain"}
                                    style={styles.mainimg}
                                />
                            </Fragment>
                        </View>
                    }

                    <View style={styles.viewoptions}>
                        <TouchableOpacity onPress={() => props.navToMylist()}>
                            <Image
                                style={styles.imgvwopt}
                                source={require("../../../assets/check_icon_pricing.png")}
                            />
                            <Text
                                style={styles.txtvwopt}>
                                My List
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.onPressVideoPlay()}>
                            {props.MoviePlay ?
                                <Image
                                    style={{ height: 20, width: 20, left: 3 }}
                                    source={require("../../../assets/moviepause.png")}
                                /> :
                                <Image
                                    style={styles.imgvwopt}
                                    source={require("../../../assets/btn-play-icon.png")}
                                />}
                            <Text
                                style={styles.txtvwopt}>
                                {props.MoviePlay ? 'Stop' : 'Play'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.imgvwopt}
                                source={require("../../../assets/rating-star-icon-yellow.png")}
                            />
                            <Text style={styles.txtvwopt}>
                                {props.dataget.movie_rating ? props.dataget.movie_rating : `0`}/5
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity // onPress={() => props.onPressRate()} 
                        >
                            <Image
                                style={styles.imgvwopt}
                                source={require("../../../assets/rating-star-icon-white.png")}
                            />
                            <Text
                                style={styles.txtvwopt}>
                                Rate This
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                style={styles.imgvwopt}
                                source={require("../../../assets/information-icon.png")}
                            />
                            <Text
                                style={styles.txtvwopt}>
                                Info
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.WatchMovieStyle}
                        onPress={() => props.onPressWatch()} >
                        <Text style={[styles.btnstxt, {}]}>Watch Now</Text>
                        <Image style={{ width: 25, left: 5, height: 25 }} source={require('../../../assets/mivewwwon.png')} />
                    </TouchableOpacity>
                    <View style={styles.mntxtvw} >
                        <View style={styles.mntxt}>
                            <Text style={styles.mnbgtxt}>
                                {props.dataget.movie_name}
                            </Text>
                            <Text style={styles.mnsmltxt}>
                                {props.dataget.release_date}
                            </Text>
                        </View>
                        {props.dataget.like_movie === 0 ?
                            <TouchableOpacity onPress={() => props.onPressMovieLike()} style={styles.mntxtimg}>
                                <Image resizeMode={"contain"} source={require("../../../assets/heart-icon.png")} />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => props.onPressMovieLike()} style={styles.mntxtimg}>
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
                                <TouchableOpacity
                                    style={{ margin: 5 }}>
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
                    <Text style={styles.hdng}>
                        Related
                        {/* {props.dataget.movie_related.movie_poster} */}
                    </Text>
                    <>
                        {/* <TouchableOpacity  onPress={()=>props.onnavtoseeall()}> */}
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={props.related}
                                horizontal={true}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={{ margin: 5 }}>
                                        <Image style={styles.imgfltlst2}
                                            source={{
                                                uri: props.url.movie_poster_url + item.movie_poster
                                            }} />
                                    </TouchableOpacity>
                                )}
                            />
                        {/* </TouchableOpacity> */}
                    </>
                </View>
            </ScrollView>
            <Dialog
                visible={props.RatingModal}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'left',
                })}
                width={0.8}
                transparent={true}
                onTouchOutside={() => {
                    props.setRatingModal(false)
                }}
                onRequestClose={() => props.setRatingModal(false)}
            >
                <DialogContent>
                    <View style={styles.alertBackground}>
                        <View style={styles.alertBox}>
                        </View>
                    </View>
                </DialogContent>
            </Dialog>

        </View >
    )
}

export default MovieDetail;