import React, { useState, useEffect, useRef, useContext } from 'react';
import EpisodesDetails from './components/EpisodesDetails';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { COMMONTHEMECOLOR } from '../../utils/constant';
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Loader from '../../utils/Loader';
var RNFS = require('react-native-fs');
import { UserContext } from '../../utils/UserContext'
import Error from '../../component/modal/error';
import Success from '../../component/modal/success';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EpisodesDetailsview = ({ route, navigation }) => {
    const [rateUsModal, setRateUsModal] = useState('')
    const [aboutUsModal, SetAboutUsModal] = useState('')
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaultRating, setDefaultRating] = useState(2);
    const [rateUs, setRateUs] = useState('');
    const [visibleSuccess, setVisibleSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const { item, Url } = route.params;
    const [related, setRelated] = useState([])
    const [dataget, setDataget] = useState([])
    const [visible, setVisible] = useState(false)
    const [MoviePlay, setMoviePlay] = useState(false)
    const [ShowFullscreen, setShowFullscreen] = useState(false)
    const [preview, setPreview] = useState("")
    const [vdataget, setVdataget] = useState([])
    const [url, setUrl] = useState('')
    // const [Data, setData] = useState(data.id === undefined || "" ? data.movie_id : data.id)
    const [MovieTrailor, setMovieTrailor] = useState('')
    const [MovieTrailorVideo, setMovieTrailorVideo] = useState('')
    const [EndVideoPlayer, setEndVideoPlayer] = useState('')
    const [MovieFileUrl, setMovieFileUrl] = useState('')
    const [MovieFile, setMovieFile] = useState('')
    const [MovieID, setMovieID] = useState('')
    const [userData, setUserData] = useContext(UserContext)
    const videoPlayer = useRef(null);
    const [
        playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [continueWacting, setContinueWacting] = useState('')
    const [episode, setEpisode] = useState(Url.episode_url + item.serial_episode)
    console.log('Url.episode_url +item.serial_episode: ', Url.episode_url + item.serial_episode);

    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [SHowFullMovie, setSHowFullMovie] = useState(false);
    const [RatingModal, setRatingModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [screenType, setScreenType] = useState('content');
    useEffect(() => {
        DataGetFunction()
        BackHandler.addEventListener(
            'hardwareBackPress',
            onBackPress
        );
        return () => {
            BackHandler.removeEventListener(
                'hardwareBackPress',
                onBackPress
            );
        };
    }, []);
    const onBackPress = () => {
        setShowFullscreen(false)
        setMoviePlay(false)
        setSHowFullMovie(false)
        return true;
    };
    // ON THIS FUNCTION I MAKE IT TRUE What... samaja
    const navToMylist = () => {
        navigation.navigate('FAVOURITE')
    }
    const DataGetFunction = async (type) => {
        setVisible(true)
        try {
            const params = {
                'serial_id': item.serial_id,
                'episode_id': item.id,
                'type': 'episode',
            }
            const { data } = await apiCall('POST', ENDPOINTS.EPISODE_DETAILS, params);
            console.log('data: ', data);
            if (data.status === 200) {
                setDataget(data.data)
                setUrl(data.base_url)
                setVisible(false)
            }
            else {
                setVisibleErr(true)
                setErrorMessage(data.data.message)
                setVisible(false)
            }
            // else if(data.status === 201) {
            //     setVisibleErr(true)
            //     setErrorMessage(data.data.message)
            //     setVisible(false)
            // }
            // else{
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
    }
    const renderToolbar = () => (
        <View style={{ backgroundColor: 'red' }}>
            <Text style={{}}> toolbar </Text>
        </View>
    );
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
            } else if(data.status === 201) {
                setVisible(false)
                // setVisibleErr(true)
                // setErrorMessage("Please login !!")
                navigation.navigate("SignIn")
            }
            else{
                navigation.navigate('SignIn')
            }
        }
        catch (e) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(e.toString())
        }
    }
    async function onPressWatch(epi) {
        // alert('1')
        // alert(epi)
        // console.log('epi: ', epi);
        setVisible(true)
        await AsyncStorage.setItem("episodeID", "" + item.id);
        setEndVideoPlayer(false)
        if (userData === "" || userData.length <= 0) {
            // alert('2')
            navigation.push("SignIn")
        } else {
            // alert('3')
            if (userData.plan_status === 0) {
                // alert('4')
                const userToken = await AsyncStorage.getItem('userToken');
                navigation.navigate("Subscription", { email: userData.email, token: userToken, status: 0 })
                setVisible(true)
            } else {
                // alert('5')
                // setEpisode(epi)
                setEpisode(Url.episode_url + epi)
                setSHowFullMovie(true)
                setVisible(false)
            }
        }
    }
    const onEnd = () => {
        setIsLoading(false)
        setEndVideoPlayer(true)
    };
    function onPressCLose() {
        // _handleCurrentDuration()
        setSHowFullMovie(false)
    }
    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
    };
    const onLoadStart = (data) => {
        setIsLoading(true)
    };
    const onBuffer = (data) => {
        console.log('onBuffer: ', data);
        setIsLoading(true)
    }
    const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('contain');
        else setScreenType('content');
    };
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
    const onSeeking = (currentTime) => setCurrentTime(currentTime);

    const onProgress = async (data) => {
        // var currentTimeData = " " + parseInt(data.currentTime)
        // await AsyncStorage.setItem('currentTimeData', currentTimeData);
        // var DurationData = " " + parseInt(data.seekableDuration)
        // await AsyncStorage.setItem('DurationData', DurationData);
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };
    function navtoTvshows() {
        navigation.navigate('DashBoard')
    }
    const dynamic = { uri: MovieFile === null ? local : MovieFileUrl + MovieFile };
    const local = require('../../nokelstv.mp4');
    const showVideo = EndVideoPlayer ? dynamic : local
    return (
        <View style={{ flex: 1 }}>
            <View style={{ position: 'absolute', top: '50%', right: 0, left: 0, bottom: 0 }}>
                {visible && <Loader state={visible} />}
            </View>
            {ShowFullscreen === false ?
                <View style={{ flex: 1 }}>
                    <EpisodesDetails
                        navtoTvshows={navtoTvshows}
                        setEndVideoPlayer={setEndVideoPlayer}
                        onPressWatch={onPressWatch}
                        rateUs={rateUs}
                        setRateUs={setRateUs}
                        setDefaultRating={setDefaultRating}
                        defaultRating={defaultRating}
                        maxRating={maxRating}
                        setMaxRating={setMaxRating}
                        aboutUsModal={aboutUsModal}
                        SetAboutUsModal={SetAboutUsModal}
                        rateUsModal={rateUsModal}
                        setRateUsModal={setRateUsModal}
                        navToMylist={navToMylist}
                        RatingModal={RatingModal}
                        setRatingModal={setRatingModal}
                        onnavtoTvShowDetails={() => onnavtoTvShowDetails()}
                        onnavtodashboard={() => onnavtodashboard()}
                        // MOVIEDATA={MOVIEDATA}
                        vdataget={vdataget}
                        preview={preview}
                        related={related}
                        dataget={dataget}
                        MoviePlay={MoviePlay}
                        url={url}
                        MovieTrailorVideo={MovieTrailorVideo}
                        MovieTrailor={MovieTrailor}
                        MovieFile={MovieFile}
                        userData={userData}
                        onPressMovieLike={onPressMovieLike}
                        Url={Url}
                        onEnd={onEnd}
                        onSeeking={onSeeking}
                        onProgress={onProgress}
                        onLoad={onLoad}
                        paused={paused}
                        onLoadStart={onLoadStart}
                        videoPlayer={videoPlayer}
                        onReplay={onReplay}
                        onPaused={onPaused}
                        onSeek={onSeek}
                        onFullScreen={onFullScreen}
                        playerState={playerState}
                        renderToolbar={renderToolbar}
                        ShowFullscreen={ShowFullscreen}
                        isFullScreen={isFullScreen}
                    />
                </View>
                :
                null
            }
            {ShowFullscreen || SHowFullMovie &&
                <View style={{ flex: 1, backgroundColor: 'black', position: 'absolute', zIndex: 1, right: 0, left: 0, top: 0, bottom: 0 }}>
                    <View style={{ position: 'absolute', paddingTop: 30, zIndex: 1, }}>
                        <TouchableOpacity style={{ padding: 20 }} onPress={() => onPressCLose()} >
                            <Image source={require('../../assets/header-back-btn.png')} />
                        </TouchableOpacity>
                    </View>
                    <Video
                        onEnd={onEnd}
                        onLoad={onLoad}
                        onBuffer={onBuffer}
                        onLoadStart={onLoadStart}
                        onProgress={onProgress}
                        paused={paused}
                        ref={videoPlayer}
                        // resizeMode={screenType}
                        source={{ uri: episode }}
                        // source={uriMovie}
                        resizeMode={'contain'}
                        // style={{backgroundColor: 'black' }}
                        style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 }}
                        volume={10}
                    />
                    {/* {EndVideoPlayer ? */}
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
                    />
                    {/* : null} */}
                </View>
            }
            {/* <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
            <Success
                message={successMessage}
                visible={visibleSuccess}
                closeModel={() => OnSuccessModal()}
            /> */}
        </View>
    )
}
export default EpisodesDetailsview;