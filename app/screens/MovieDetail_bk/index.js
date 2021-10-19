import React, { useState, useEffect, useRef, useContext, useCallback } from 'react';
import MovieDetail from './components/moviedetail';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { COMMONTHEMECOLOR } from '../../utils/constant';
import { View, Text, BackHandler, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
var RNFS = require('react-native-fs');
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Loader from '../../utils/Loader';
import Video from 'react-native-video';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { UserContext } from '../../utils/UserContext'
import { useFocusEffect, useLinkProps } from '@react-navigation/native';
import Error from '../../component/modal/error';
// import LottieView from 'lottie-react-native';
const MovieDetailview = ({ route, navigation }) => {
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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [SHowFullMovie, setSHowFullMovie] = useState(false);
    const [profileLoader, setProfileLoader] = useState(false);
    const [RatingModal, setRatingModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [
        playerState, setPlayerState
    ] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');
    useFocusEffect(useCallback(() => {
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
        };
    }, []);
    const onBackPress = () => {
        setShowFullscreen(false)
        setMoviePlay(false)
        setSHowFullMovie(false)
        return true;
    };
    const [MOVIEDATA, setMOVIEDATA] =
        useState([
            {
                MovieTitle: 'World War Z',
                MoviePoster:
                    require
                        ('../../assets/world_war_z_ver2_xlg.jpg')
            },
            {
                MovieTitle: 'Joker',
                MoviePoster:
                    require
                        ('../../assets/Screen-Shot-2019-11-10-at-9.54.13-AM.png')
            },
            {
                MovieTitle: 'Divergent',
                MoviePoster:
                    require
                        ('../../assets/divergent_film_poster.png')
            },
            {
                MovieTitle: 'Experience',
                MoviePoster:
                    require
                        ('../../assets/Expendables-3-movie-poster.png')
            },
            {
                MovieTitle: 'Wolverine',
                MoviePoster:
                    require
                        ('../../assets/wolverine_ver5_xlg.jpg')
            },
            {
                MovieTitle: 'Fast And Furious',
                MoviePoster:
                    require
                        ('../../assets/header-banner-bg-l2.png')
            },
        ])
    async function onPressVideoPlay() {
        setMoviePlay(!MoviePlay)
    }

    
    async function onPressWatch() {
        setEndVideoPlayer(false)
        if (userData === "" || userData.length <= 0) {
            navigation.push("SignIn")
        } else {
            if (userData.plan_status === 0) {
                const userToken = await AsyncStorage.getItem('userToken');
                navigation.navigate("Subscription", { email: userData.email, token: userToken, status: 0 })
            } else {
                // setShowFullscreen(true)
                setSHowFullMovie(true)
                // setMoviePlay(!MoviePlay)
            }
        }
    }
    // function onnavtoseeall() {
    //     alert(":::::")
    //     UserDatatype === 1 ?
    //         props.navigation.navigate("MovieList")
    //         : UserDatatype === 2 ?
    //             props.navigation.navigate("TvShowList")
    //             : UserDatatype === 3 ?
    //                 props.navigation.navigate("NewsList")
    //                 : null
    // }
    const DataGetFunction = async (type) => {
        try {
            type === 1 && setVisible(true)
            const params = {
                movie_id: Data
            }
            // alert(Data)
            const { data } = await apiCall('POST', ENDPOINTS.GET_MOVIE_DETAIL, params);
            console.log('data: ', data);
            if (data.status === 200) {
                setMovieID(data.data.movie_id)
                setDataget(data.data)
                setRelated(data.data.movie_related)
                setUrl(data.base_url)
                setVdataget(data.data.type_of_movi)
                setPreview(data.data.user_watchlist)
                setMovieTrailor(data.base_url.movie_trailer_url)
                setMovieTrailorVideo(data.data.trailer)

                setMovieFileUrl(data.base_url.movie_movies_url)
                setMovieFile(data.data.movie_file.length > 0 ? data.data.movie_file[0].movie_file : null)
                setVisible(false)
            }
            else {
                setVisibleErr(true)
                setErrorMessage(data.data.message)
                setVisible(false)
            }
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
    const onProgress = (data) => {
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };
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
        setIsLoading(false)
        setEndVideoPlayer(true)
        // setPlayerState(PLAYER_STATES.ENDED)
    };
    const onFullScreen = () => {
        setIsFullScreen(isFullScreen);
        if (screenType == 'content') setScreenType('contain');
        else setScreenType('content');
        // setShowFullscreen(true)
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
    function onPressCLose() {
        setSHowFullMovie(false)
    }
    const onPressMovieLike = async () => {
        console.log('props.userData: ', userData);
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
                    setVisibleErr(true)
                    setErrorMessage(data.message)
                }
            } else {
                // setVisibleErr(true)
                // setErrorMessage("Please login !!")
                navigation.navigate("SignIn")
            }
        }
        catch (e) {
            setVisibleErr(true)
            setErrorMessage(e.toString())
        }
    }

    const onPressRate = () => {
        setRatingModal(true)
    }
    const onPressList = () => {
        navigation.navigate('WatchList')
    }
    const navToMylist = () => {  // tanuja
        navigation.navigate('FAVOURITE')
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
                    <MovieDetail
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
                        navToMylist={navToMylist}
                    />
                </View>
                : null
            }
            {ShowFullscreen || SHowFullMovie &&
                <View style={{ flex: 1, backgroundColor: 'black', position: 'absolute', zIndex: 1, right: 0, left: 0, top: 0, bottom: 0 }}>
                    <View style={{ position: 'absolute', paddingTop: 30, zIndex: 1, }}>
                        <TouchableHighlight style={{ padding: 20 }} onPress={() => onPressCLose()} >
                            <Image source={require('../../assets/header-back-btn.png')} />
                        </TouchableHighlight>
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
                        source={showVideo}
                        // source={uriMovie}
                        resizeMode={'contain'}
                        // style={{backgroundColor: 'black' }}
                        style={{
                            position: 'absolute', right: 0, left: 0, top: 0, bottom: 0
                        }}
                        volume={10}
                    />
                    {EndVideoPlayer ?
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
                        /> : null}
                </View>
            }
            <Error
                message={errorMessage}
                visible={visibleErr}
                closeModel={() => setVisibleErr(false)}
            />
        </View>
    )
}
export default MovieDetailview;