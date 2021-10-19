import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import MovieDetail from './components/moviedetail';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { COMMONTHEMECOLOR } from '../../utils/constant';
import { View, Text, BackHandler, Dimensions, Image, TouchableHighlight, Modal } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';
import Loader from '../../utils/Loader';
var RNFS = require('react-native-fs');
import { UserContext } from '../../utils/UserContext'
import { useFocusEffect } from '@react-navigation/native';
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
import { TouchableOpacity } from 'react-native-gesture-handler';
import VideoPlayer from '../../component/VideoPlayer';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import ModalView from './components/modal';

const MovieDetailview = ({ route, navigation }) => {
    const [rateUsModal, setRateUsModal] = useState('')
    const [aboutUsModal, SetAboutUsModal] = useState('')
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaultRating, setDefaultRating] = useState(2);
    const [rateUs, setRateUs] = useState('');
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const { data } = route.params;
    const [related, setRelated] = useState([])
    const [dataget, setDataget] = useState([])
    const [visible, setVisible] = useState(false)
    const [MoviePlay, setMoviePlay] = useState(false)
    const [ShowFullscreen, setShowFullscreen] = useState(false)
    const [preview, setPreview] = useState("")
    const [vdataget, setVdataget] = useState([])
    const [url, setUrl] = useState('')
    const [Data, setData] = useState(data.id === undefined || "" ? data.movie_id : data.id)
    const [MovieTrailor, setMovieTrailor] = useState('')
    const [MovieTrailorVideo, setMovieTrailorVideo] = useState('')
    const [EndVideoPlayer, setEndVideoPlayer] = useState('')
    const [MovieFileUrl, setMovieFileUrl] = useState('')
    const [MovieFile, setMovieFile] = useState('')
    const [MovieID, setMovieID] = useState('')
    const [userData, setUserData] = useContext(UserContext)
    const videoPlayer = useRef(null);
    const [movieplayer, SetMovieplayer] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [SHowFullMovie, setSHowFullMovie] = useState(false);
    const [profileLoader, setProfileLoader] = useState(false);
    const [RatingModal, setRatingModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [continueWacting, setContinueWacting] = useState(0)
    const [visibleErr, setVisibleErr] = useState(false);
    const [favourite, setfavourite] = useState('');
    const [orientation, setOrientation] = useState(0);
    const [msg, setMsg] = useState('');
    const [hideBackButton, setHideBackButton] = useState();
    const [
        playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);

    const [screenType, setScreenType] = useState('content');
    useFocusEffect(useCallback(() => {
        Orientation.getOrientation((err, orientation) => {
            if (orientation == 'LANDSCAPE') {
                Orientation.lockToPortrait();
                setOrientation(0)
            }
        });
        // _handleCurrentDuration()
        DataGetFunction(1)
        return () => { DataGetFunction(1) }
    }, [userData])
    );
    useEffect(() => {
        BackHandler.addEventListener(
            'hardwareBackPress',
            onBackPress
        );
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                onBackPress
            );
            _handleCurrentDuration()
        };
    }, []);
    const onBackPress = () => {
        Orientation.getOrientation((err, orientation) => {
            if (orientation == 'LANDSCAPE') {
                Orientation.lockToPortrait();
                setOrientation(0)
            }
        });
        setShowFullscreen(false)
        setMoviePlay(false)
        setSHowFullMovie(false)
        return true;
    };
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: 'World War Z',
                MoviePoster: require('../../assets/world_war_z_ver2_xlg.jpg')
            },
            {
                MovieTitle: 'Joker',
                MoviePoster: require('../../assets/Screen-Shot-2019-11-10-at-9.54.13-AM.png')
            },
            {
                MovieTitle: 'Divergent',
                MoviePoster: require('../../assets/divergent_film_poster.png')
            },
            {
                MovieTitle: 'Experience',
                MoviePoster: require('../../assets/Expendables-3-movie-poster.png')
            },
            {
                MovieTitle: 'Wolverine',
                MoviePoster: require('../../assets/wolverine_ver5_xlg.jpg')
            },
            {
                MovieTitle: 'Fast And Furious',
                MoviePoster: require('../../assets/header-banner-bg-l2.png')
            },
        ])
    async function onPressVideoPlay() {
        setMoviePlay(!MoviePlay)
    }

    async function onPressLogin() {
        setShowModal(false);
        navigation.push("SignIn")
    }
    // ON THIS FUNCTION I MAKE IT TRUE What... samaja
    async function onPressWatch() {
        setVisible(true)
        setEndVideoPlayer(true)
        if (userData === "" || userData.length <= 0) {
            navigation.push("SignIn")
            setVisible(true)
        } else {
            if (userData.plan_status === 0) {
                const userToken = await AsyncStorage.getItem('userToken');
                navigation.navigate("Subscription",
                    { email: userData.email, token: userToken, status: 0 }
                )
                setVisible(true)
            } else {
                setSHowFullMovie(true)
                setVisible(false)
            }
        }
    }

    function addFafourite(value) {
        setfavourite(value)
        onPressMovieLike();
    }
    async function _handleCurrentDuration() {
        // setVisible(true)
        const DurationData = await AsyncStorage.getItem('DurationData');
        await AsyncStorage.removeItem('DurationData');
        const currentTimeData = await AsyncStorage.getItem('currentTimeData');
        await AsyncStorage.removeItem('currentTimeData');
        try {
            if (DurationData !== null || currentTimeData !== null) {
                const params = {
                    movie_id: Data,
                    start_time: currentTimeData,
                    duration: DurationData
                }
                const { data } = await apiCall('POST', ENDPOINTS.CONTINUE_WATCHING_DATA, params)
                if (data.status === 200) {
                    // setVisible(false)
                }
            }
            else  {
                setVisible(false)
            }
            // else if (data.status === 200) {
            //     // setVisible(false)/
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        } catch (error) {
            // setVisible(false)
        }
    }
    const navToMylist = () => {
        navigation.navigate('FAVOURITE')
    }
    function onnavtoseeall() {
        UserDatatype === 1 ?
            props.navigation.navigate("MovieList")
            : UserDatatype === 2 ?
                props.navigation.navigate("TvShowList")
                : UserDatatype === 3 ?
                    props.navigation.navigate("NewsList")
                    : null
    }
    const DataGetFunction = async (type) => {
        setVisible(true)
        try {
            type === 1 && setVisible(true)
            const params = {
                movie_id: Data
            }
            const { data } = await apiCall('POST', ENDPOINTS.GET_MOVIE_DETAIL, params);
            if (data.status === 200) {
                setMovieID(data.data.movie_id)
                setDataget(data.data)
                setRelated(data.data.movie_related)
                setUrl(data.base_url)
                setVdataget(data.data.type_of_movi)
                setPreview(data.data.user_watchlist)
                setMovieTrailor(data.base_url.movie_trailer_url)
                setMovieTrailorVideo(data.data.trailer)
                setfavourite(data.data.like_movie)
                setContinueWacting(data.data.continue_watching.length > 0 ? data.data.continue_watching[0].start_time : 0);
                setMovieFileUrl(data.base_url.movie_movies_url)
                setMovieFile(data.data.movie_file.length > 0 ? data.data.movie_file[0].movie_file : null)
                setVisible(false)
            }
            else  {
                setVisibleErr(true)
                setErrorMessage(data.data.message)
                setVisible(false)
            }
            // else if (data.status === 200) {
            //     setVisibleErr(true)
            //     setErrorMessage(data.data.message)
            //     setVisible(false)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(e.toString())
        }
    }
    function onnavtodashboard() {
        navigation.goBack(null)
        Orientation.getOrientation((err, orientation) => {
            if (orientation == 'LANDSCAPE') {
                Orientation.lockToPortrait();
                setOrientation(1)
            }
        });
    }
    function onnavtoTvShowDetails() {
        navigation.navigate("TvShowDetails")
    }
    const onLoadPosterStart = () => {
        setProfileLoader(true)
    }
    const onLoadEnd = () => {
        setProfileLoader(false)
    }
    const onSeek = (seek) => {
        //Handler for change in seekbar
        videoPlayer.current.seek(seek);
    };
    const onPaused = (playerState) => {
        //Handler for Video Pause
        setPaused(!paused);
        setPlayerState(playerState);
    };
    const onReplay = () => {
        //Handler for Replay
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    };
    const onProgress = async (data) => {
        var currentTimeData = " " + parseInt(data.currentTime)
        await AsyncStorage.setItem('currentTimeData', currentTimeData);
        var DurationData = " " + parseInt(data.seekableDuration)
        await AsyncStorage.setItem('DurationData', DurationData);
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };
    function movieBackward() {
        videoPlayer.current.seek(currentTime - 15);
        setCurrentTime(currentTime - 15)
        // const timeing = currentTime - 15
        // setOrientation(currentTime - 15)
    }
    function movieForward() {
        videoPlayer.current.seek(currentTime + 15);
        setCurrentTime(currentTime + 15)
        // setOrientation(currentTime + 15)
    }
    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
    };
    const onLoadStart = (data) => {
        setIsLoading(true)
    };
    const onBuffer = (data) => {
        setIsLoading(true)
    }
    const onEnd = () => {
        alert("End")
        setIsLoading(false)
        setEndVideoPlayer(true)
    };
    const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('contain');
        else setScreenType('content');
        // Orientation.getOrientation((err, orientation) => {
        //     if (orientation == 'LANDSCAPE') {
        //         Orientation.lockToPortrait();
        //         setOrientation(0)
        //     } else {
        //         Orientation.lockToLandscape();
        //         setOrientation(1)
        //     }
        // });
    };
    const renderToolbar = () => (
        <View style={{ backgroundColor: 'red' }}>
            <Text style={{}}> toolbar </Text>
        </View>
    );
    const onSeeking = (currentTime) => setCurrentTime(currentTime);
    // const uriMovie = {
    //     uri: SHowFullMovie ? MovieFileUrl + MovieFile : MovieTrailor + MovieTrailorVideo
    // }
    const onPressMovieLike = async () => {
        
        setVisible(true)
        try {
            if (userData.email) {
                const params = {
                    movie_id: MovieID,
                    type_id: 1,//movie =1 , serial =2
                    video_pause_time: '',
                }
                const { data } = await apiCall('POST', ENDPOINTS.USER_MOVIE_LIKE, params);
                if (data.status === 200) {
                    DataGetFunction(0)
                }
                else {
                    setVisible(false)
                    setVisibleErr(true)
                    setErrorMessage(data.message)
                }
            } else {
                //alert("yes")
                setVisible(false)
                setShowModal(true)
                setMsg("If you want to like this movie so you need to login first");
                //setErrorMessage("Please login !!")
                
                // navigation.navigate("SignIn")
            }
            //     else if(data.status === 200) {
            //         setVisible(false)
            //         setVisibleErr(true)
            //         setErrorMessage(data.message)
            //     }
            // } else {
            //     setVisible(false)
            //     // setVisibleErr(true)
            //     // setErrorMessage("Please login !!")
            //     navigation.navigate("SignIn")
            // }
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(e.toString())
        }
    }
    const onPressRate = () => {
        setRatingModal(true)
    }
    const openPopupRateUs = () => {
        if (userData.email) {
            setRatingModal(true)
        }
        else {
            setShowModal(true)
            setMsg("If you want to give rating to this movie so you need to login first");
        }
    }
    const closeModalRateUs = () => {
        setRatingModal(false)
    }
    const onPressList = () => {
        navigation.navigate('WatchList')
    }
    const openAboutInfo = () => {
        SetAboutUsModal(true)
    }
    const _handleCancel = () => {
        SetAboutUsModal(false)
    }
    function onPressCLose() {
        _handleCurrentDuration()
        setSHowFullMovie(false)
        Orientation.getOrientation((err, orientation) => {
            if (orientation == 'LANDSCAPE') {
                Orientation.lockToPortrait();
                setOrientation(0)
            }
        });
    }
    function OnSuccessModal() {
        setRatingModal(false);
        setVisibleSuccess(false)
    }

    function onnavtomoviedetail(data) {
        navigation.push("MovieDetail", { data: data })
    }
    const _handleRateus = async () => {
        setVisible(true)
        const params = {
            rating: defaultRating,
            review: rateUs,
            movie_id: Data
        }
        try {
            const response = await apiCall('POST', ENDPOINTS.MOVIE_REVIEW, params);
            if (response.status === 200) {
                setVisibleSuccess(true)
                setSuccessMessage("Ratings done successfully.")
                setVisible(false)
                setRateUs('')
            }
            else {
                navigation.navigate('SignIn')
            }
            // else if(response.status === 201){
            //     navigation.navigate('SignIn')
            // }
            // else{
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setVisibleSuccess(false)
            SetAboutUsModal(false)
            setVisible(false)
            alert('Netwok Error!')
        }
    }
    function navtoTvshows() {
        navigation.navigate('DashBoard')
    }
    function hanldleMovie() {
        SetMovieplayer(true)
    }
    function onLoadStartmovie() {
        setCurrentTime(continueWacting)

    }

    const handelHideBackButton = (data) => {
        setHideBackButton(data)
    }

    const dynamic = { uri: MovieFile === null ? local : MovieFileUrl + MovieFile };
    const local = require('../../nokelstv.mp4');
    const showVideo = movieplayer ? dynamic : local
    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: '50%', right: 0, left: 0, bottom: 0 }}>
                {visible && <Loader state={visible} />}
            </View>
            {ShowFullscreen === false ?
                <View style={{ flex: 1 }}>
                    <MovieDetail
                        navtoTvshows={navtoTvshows}
                        rateUs={rateUs}
                        setRateUs={setRateUs}
                        setDefaultRating={setDefaultRating}
                        defaultRating={defaultRating}
                        maxRating={maxRating}
                        setfavourite={setfavourite}
                        addFafourite={addFafourite}
                        favourite={favourite}
                        setMaxRating={setMaxRating}
                        _handleRateus={_handleRateus}
                        _handleCancel={_handleCancel}
                        openAboutInfo={openAboutInfo}
                        aboutUsModal={aboutUsModal}
                        SetAboutUsModal={SetAboutUsModal}
                        closeModalRateUs={closeModalRateUs}
                        rateUsModal={rateUsModal}
                        setRateUsModal={setRateUsModal}
                        openPopupRateUs={openPopupRateUs}
                        navToMylist={navToMylist}
                        RatingModal={RatingModal}
                        setRatingModal={setRatingModal}
                        onPressRate={onPressRate}
                        onLoadPosterStart={onLoadPosterStart}
                        onLoadEnd={onLoadEnd}
                        profileLoader={profileLoader}
                        onnavtoTvShowDetails={() => onnavtoTvShowDetails()}
                        onnavtodashboard={() => onnavtodashboard()}
                        MOVIEDATA={MOVIEDATA}
                        vdataget={vdataget}
                        preview={preview}
                        related={related}
                        dataget={dataget}
                        MoviePlay={MoviePlay}
                        url={url}
                        onPressVideoPlay={onPressVideoPlay}
                        MovieTrailorVideo={MovieTrailorVideo}
                        MovieTrailor={MovieTrailor}
                        onnavtomoviedetail={(data) => onnavtomoviedetail(data)}
                        // onnavtoseeall={onnavtoseeall}

                        onEnd={onEnd}
                        onLoad={onLoad}
                        onLoadStart={onLoadStart}
                        onProgress={onProgress}
                        paused={paused}
                        videoPlayer={videoPlayer}

                        MovieFile={MovieFile}

                        duration={duration}
                        isLoading={isLoading}
                        onPaused={onPaused}
                        onReplay={onReplay}
                        onSeek={onSeek}
                        onSeeking={onSeeking}
                        onFullScreen={onFullScreen}
                        playerState={playerState}
                        currentTime={currentTime}
                        renderToolbar={renderToolbar}
                        ShowFullscreen={ShowFullscreen}
                        isFullScreen={isFullScreen}
                        screenType={screenType}
                        EndVideoPlayer={EndVideoPlayer}
                        setEndVideoPlayer={setEndVideoPlayer}
                        userData={userData}
                        onPressWatch={onPressWatch}
                        onPressMovieLike={onPressMovieLike}
                        onPressList={onPressList}
                    />
                </View>
                : null
            }
            {
                <ModalView  
                    showModal={showModal}
                    setShowModal={setShowModal}
                    msg={msg}
                    onPressLogin={onPressLogin}
                />
                
            }
            {ShowFullscreen || SHowFullMovie &&
                <View style={{ flex: 1, backgroundColor: 'black', position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 }}>
                    <View style={{ position: 'absolute', paddingTop: 30, zIndex: 1 }}>
                        {hideBackButton ? 
                        <TouchableHighlight style={{ padding: 20 }} onPress={() => onPressCLose()} >
                            <Image source={require('../../assets/header-back-btn.png')} />
                        </TouchableHighlight>
                        : null }
                        {/* {movieplayer ?
                            <View style={{
                                justifyContent: "space-between", flexDirection: "row",
                                width:  '50%', top:  '5%'
                            }}>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: '100%', width: 70 }}
                                    onPress={() => movieBackward()}>
                                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/back.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: '100%', width: 70 }}
                                    onPress={() => movieForward()}>
                                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/nextt.png')} />
                                </TouchableOpacity>
                            </View> : null}  */}


                        {/* {movieplayer ?
                            <View style={{
                                justifyContent: "space-between", flexDirection: "row",
                                width: orientation === 0 ? '80%' : '75%', top: orientation === 0 ? '50%' : '5%'
                            }}>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: '100%', width: 70 }}
                                    onPress={() => movieBackward()}>
                                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/left.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", height: '100%', width: 70 }}
                                    onPress={() => movieForward()}>
                                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/right.png')} />
                                </TouchableOpacity>
                            </View> : null} */}

                        {/* {movieplayer ?
                        <View style={{ justifyContent: "space-between", flexDirection: "row",width:"80%",top:'55%'}}>
                            <TouchableOpacity  style={{ justifyContent: "center", alignItems: "center", height: '100%', width: 70 }} onPress={() => movieBackward()}>
                                <Image style={{ height:30,width:30 }} source={require('../../assets/back.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: "center",alignItems: "center", height: '100%', width: 70 }} onPress={() => movieForward()}>
                                <Image style={{ height:30,width:30 }} source={require('../../assets/nextt.png')} />
                            </TouchableOpacity>
                        </View> : null} */}
                    </View>
                    {
                    movieplayer ?
                    <VideoPlayer
                        videoUrl={showVideo}
                        //onEndVideo={onEndVideo}
                        setControl={true}
                        customControl={true}
                        handelHideBackButton={handelHideBackButton}
                    />
                    
                        // <Video
                        //     onEnd={onEnd}
                        //     onLoad={onLoad}
                        //     onBuffer={onBuffer}
                        //     onLoadStart={onLoadStart}
                        //     onProgress={onProgress}
                        //     paused={paused}
                        //     ref={videoPlayer}
                        //     onLoadStart={onLoadStart}
                        //     // resizeMode={screenType}
                        //     source={showVideo}
                        //     // source={uriMovie}
                        //     resizeMode={'contain'}
                        //     fullscreenOrientation={"landscape"}
                        //     // style={{backgroundColor: 'black' }}
                        //     style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 }}
                        //     volume={10}
                        // /> 
                        
                        : <Video
                            onEnd={hanldleMovie}
                            onLoad={onLoad}
                            onBuffer={onBuffer}
                            onLoadStart={onLoadStart}
                            onProgress={onProgress}
                            paused={paused}
                            ref={videoPlayer}
                            // resizeMode={screenType}
                            source={showVideo}
                            // source={uriMovie}
                            resizeMode={'contain'}
                            // style={{backgroundColor: 'black' }}
                            style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 ,}}
                            volume={10}
                        />
                        
                        }
                    {/* {movieplayer ?
                        <MediaControls
                            duration={duration}
                            isLoading={isLoading}
                            isFullScreen={isFullScreen}
                            mainColor={COMMONTHEMECOLOR}
                            onPaused={onPaused}
                            onReplay={onReplay}
                            onSeek={onSeek}
                            onSeeking={onSeeking}
                            onFullScreen={onFullScreen}
                            playerState={playerState}
                            progress={currentTime}
                            toolbar={renderToolbar()}
                            showOnStart={true}
                            disableBack={false}
                        /> : null} */}
                </View>
            }
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => OnSuccessModal()}
            />
        </View>
    )
}
export default MovieDetailview;