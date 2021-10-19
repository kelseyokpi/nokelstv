import React, { useState, useEffect, useContext, useRef } from 'react';
import { View, BackHandler, TouchableHighlight, Image, Text, TouchableOpacity } from 'react-native'
import TvShowDetails from './components/TvShowDetails';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import Loader from '../../utils/Loader';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { UserContext } from '../../utils/UserContext'
//import Orientation, { PORTRAIT } from 'react-native-orientation-locker';
import styles from './components/style'
import { COMMONTHEMECOLOR } from '../../utils/constant';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

const TvShowDetailsView = ({ route }) => {
    const navigation = useNavigation();

    const { data } = route.params;
    const [visible, setVisible] = useState(false)
    const [apiData, setApiData] = useState("")
    const [userData, setUserData] = useContext(UserContext)
    const [baseURL, setBaseURL] = useState("")
    const [SERIALLISTDATA, setSERIALLISTDATA] = useState("")
    const [SEASONDATA, setSEASONDATA] = useState([])
    const [SERIALLISTURL, setSERIALLISTURL] = useState("")
    const [screenFull, setScreenFull] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [MoviePlay, setMoviePlay] = useState(false)
    const [Episode, setEpisode] = useState('')
    const [EndVideoPlayer, setEndVideoPlayer] = useState('')
    const [ShowFullscreen, setShowFullscreen] = useState(false)
    const [SHowFullMovie, setSHowFullMovie] = useState(false);
    const [SHowFullSerial, setSHowFullSerial] = useState(false);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
    const [profileLoader, setProfileLoader] = useState(false);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(false);
    const videoPlayer = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [serialdetail, setSerialdetail] = useState({})
    const [serialrelated, setSerialelated] = useState([])
    const [type, setType] = useState(1);
    const [currentTime, setCurrentTime] = useState(0);
    const [screenType, setScreenType] = useState('content');
    const [tvsShow, setTvShow] = useState(false)
    const [fullscreenOrientation, setFullscreenOrientation] = useState(false)

    // const [season, setSeason] = useState([])
    // const [state, setState] = useState('')
    // const [showSkip, setShowSkip] = useState('content');

    const [MainHeadingData, setMainHeadingData] =
        useState([
            { name: 'EPISODES', id: 1 },
            { name: 'RELATED SHOWS', id: 2 },
            { name: 'SEASON ', id: 3 }], [])
    useEffect(() => {
        SerialData();
        SerialEpisodeList();
        SerialSeasonList();
        console.log('useEffect 1')
    }, [])
    const SerialData = async () => {
        setVisible(true)
        const Ab = {
            "serial_id": data.id
        }
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.SERIALDETAIL, Ab);
            if (response.status === 200) {
                setVisible(false)
                setApiData(response.data.data)
                setBaseURL(response.data.base_url);
                setSerialelated(response.data.data.movie_related);
            }
            else {
                setVisible(false)
            }
        }
        catch (e) {
            setVisible(false)
        }
    }
    const SerialEpisodeList = async () => {
        console.log('SerialEpisodeList 2')
        setVisible(false)
        const Ab = {
            "serial_id": data.id
        }
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.SERIAL_EPISODE, Ab);
            if (response.status === 200) {
                setVisible(false)
                setSERIALLISTDATA(response.data.data)
                setSERIALLISTURL(response.data.base_url)
            }
            else {
                setVisible(false)
            }
        }
        catch (e) {
            setVisible(false)
        }
    }
    const SerialSeasonList = async () => {
        console.log('SerialSeasonList 3')
        setVisible(false)
        const Ab = {
            "serial_id": data.id
        }
        try {
            const response = await apiCall
                ('POST', ENDPOINTS.SERIAL_SEASON, Ab);
            if (response.status === 200) {
                setVisible(false)
                setSEASONDATA(response.data.data)
                // setSERIALLISTDATA(response.data.data)
                // setSERIALLISTURL(response.data.base_url)
            }
            else {
                setVisible(false)
            }
        }
        catch (e) {
            setVisible(false)
        }
    }
    function goBack() {

        // navigation.pop(1)
        console.log('navigation: ', navigation.canGoBack());
        // if (navigation.canGoBack())
        navigation.goBack(null)
    }
    async function onPressVideoPlay() {
        setMoviePlay(!MoviePlay)
    }
    async function onPressWatch() {
        console.log(' onPressWatch 4')
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
                // setShowFullscreen(true)
                setSHowFullMovie(true)
                setVisible(false)
                // setMoviePlay(!MoviePlay)
            }

        }
    }

    useEffect(() => {
        console.log(' useEffect 5')
        // BackHandler.addEventListener(
        //     'hardwareBackPress',
        //     onBackPress
        // );
        // return () => {
        //     BackHandler.removeEventListener(
        //         'hardwareBackPress',
        //         onBackPress
        //     );
        // };
    }, []);
    const onBackPress = () => {
        setShowFullscreen(false)
        // setMoviePlay(false)
        setSHowFullMovie(false)
        setSHowFullSerial(false)
        setTvShow(false)
        return true;
    };
    const onEnd = () => {
        console.log(' onEnd 6')
        setIsLoading(false)
        setEndVideoPlayer(true)
    };
    const onLoadPosterStart = () => {
        console.log(' onLoadPosterStart 7')
        setProfileLoader(true)
    }
    const onLoadEnd = () => {
        console.log(' onLoadEnd 8')
        setProfileLoader(false)
    }
    const onLoad = (data) => {
        console.log(' onLoad 9')
        setDuration(data.duration);
        setIsLoading(false);
    };
    const onSeek = (seek) => {
        console.log(' onSeek 10')
        //Handler for change in seekbar
        videoPlayer.current.seek(seek);
    };
    const onSeeking = (currentTime) => setCurrentTime(currentTime);
    const onPaused = (playerState) => {
        console.log(' onPaused 11')
        //Handler for Video Pause
        setPaused(paused => !paused);
        setPlayerState(playerState);
    };
    const onReplay = () => {
        console.log(' onReplay 12')
        //Handler for Replay
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    };

    const onBuffer = (data) => {
        console.log(' onBuffer 13')
        setIsLoading(true)
    }
    const onLoadStart = (data) => {
        console.log(' onLoadStart 14')
        setIsLoading(true)
    };

    function onPressCLose() {
        console.log(' onPressCLose 15')
        setSHowFullMovie(false)
        setSHowFullSerial(false)
    }
    async function _handleCurrentDuration() {
        // setVisible(true)
        const DurationData = await AsyncStorage.getItem('DurationData');
        await AsyncStorage.removeItem('DurationData');
        const currentTimeData = await AsyncStorage.getItem('currentTimeData');
        await AsyncStorage.removeItem('currentTimeData');
        const episodeID = await AsyncStorage.getItem('episodeID');
        await AsyncStorage.removeItem('episodeID');
        try {
            if (DurationData !== null || currentTimeData !== null) {
                const params = {
                    serial_id: data.id,
                    start_time: currentTimeData,
                    duration: DurationData,
                    episode_id: episodeID
                }
                alert(JSON.stringify(params))
                const { data } = await apiCall('POST', ENDPOINTS.CONTINUE_WATCHING_TV_DATA, params)
                if (data.status === 200) {
                    // setVisible(false)
                }
            }
            else {
                // setVisible(false)/
            }
            // else  if(response.status === 201) {
            //     // setVisible(false)/
            // }
            // else{
            //     navigation.navigate('SignIn')
            // }
        } catch (error) {
            // setVisible(false)
        }
    }
    const onProgress = async (data) => {
        console.log(' onProgress 16')
        var currentTimeData = " " + parseInt(data.currentTime)
        await AsyncStorage.setItem('currentTimeData', currentTimeData);
        var DurationData = " " + parseInt(data.seekableDuration)
        await AsyncStorage.setItem('DurationData', DurationData);
        // Video Player will progress continue even if it ends
        if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
            setCurrentTime(data.currentTime);
        }
    };
    async function onPressEpisode(epi) {
        console.log(' onPressEpisode 17')
        await AsyncStorage.setItem('episodeID', epi);
        setEndVideoPlayer(false)
        if (userData === "" || userData.length <= 0) {
            navigation.push("SignIn")
        } else {
            if (userData.plan_status === 0) {
                const userToken = await AsyncStorage.getItem('userToken');
                navigation.navigate("Subscription", { email: userData.email, token: userToken, status: 0 })
            } else {
                setEpisode(SERIALLISTURL.episode_url + epi)
                setSHowFullSerial(true)
            }
        }
    }
    //
    async function onPressSerialDEtail(data) {
        console.log(' onPressSerialDEtail 18')
        navigation.push("TvShowDetails", { data: data })
    }
    function navtoSeasonDetails(item) {
        navigation.navigate('SeasonCategory', { item: item })
    }
    return (
        <View style={{ flex: 1 }}>
            {visible && <Loader state={visible} />}
            <TvShowDetails
                profileLoader={profileLoader}
                onLoadEnd={onLoadEnd}
                onLoadPosterStart={onLoadPosterStart}
                EndVideoPlayer={EndVideoPlayer}
                onPressWatch={onPressWatch}
                MoviePlay={MoviePlay}
                onPressVideoPlay={onPressVideoPlay}
                goBack={goBack}
                apiData={apiData}
                baseURL={baseURL}
                SEASONDATA={SEASONDATA}
                SERIALLISTDATA={SERIALLISTDATA}
                SERIALLISTURL={SERIALLISTURL}
                MainHeadingData={MainHeadingData}
                ShowFullscreen={ShowFullscreen}
                onPressEpisode={onPressEpisode}
                serialrelated={serialrelated}
                setType={setType}
                type={type}
                onPressSerialDEtail={onPressSerialDEtail}
            />
            {/* {ShowFullscreen || SHowFullMovie &&
                <View style={{ flex: 1, backgroundColor: 'black', position: 'absolute', zIndex: 1, right: 0, left: 0, top: 0, bottom: 0 }}>
                    <View style={{ position: 'absolute', paddingTop: 30, zIndex: 1, }}>
                        <TouchableHighlight style={{ padding: 20 }} onPress={() => onPressCLose()} >
                            <Image source={require('../../assets/header-back-btn.png')} />
                        </TouchableHighlight>
                    </View>
                    <Video
                        // fullscreenOrientation={true}
                        // fullscreenAutorotate={true}
                        // fullscreenOrientation={true}
                        // fullscreenOrientation="landscape"

                        isFullScreen={isFullScreen}
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
                        // resizeMode={'contain'}
                        // style={{backgroundColor: 'black' }}
                        style={{
                            position: 'absolute', right: 0, left: 0, top: 0, bottom: 0
                        }}
                        volume={10}
                    />
                    {EndVideoPlayer ?
                        <MediaControls
                            // visible={true}
                            duration={duration}
                            isLoading={isLoading}
                            isFullScreen={isFullScreen}
                            mainColor={'red'}
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
            } */}
            {SHowFullSerial &&
                <View style={{
                    flex: 1, backgroundColor: 'black', position: 'absolute', zIndex: 1,
                    right: 0, left: 0, top: 0, bottom: 0
                }}>
                    <View style={{ position: 'absolute', paddingTop: 30, zIndex: 1, }}>
                        <TouchableHighlight style={{ padding: 20 }} onPress={() => onPressCLose()} >
                            <Image source={require('../../assets/header-back-btn.png')} />
                        </TouchableHighlight>
                    </View>
                    <Video
                        fullscreenAutorotate={true}
                        fullscreenOrientation={true}
                        isFullScreen={true}
                        onEnd={onEnd}
                        onLoad={onLoad}
                        onBuffer={onBuffer}
                        onLoadStart={onLoadStart}
                        paused={paused}
                        ref={videoPlayer}
                        onProgress={onProgress}
                        // resizeMode={""}
                        source={{ uri: Episode }}
                        controls={false}
                        // source={uriMovie}
                        resizeMode={'contain'}
                        // style={{backgroundColor: 'black' }}
                        style={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0 }}
                        volume={10}
                    />
                    {/* <TouchableOpacity
                        onPress={() => handleFullscreen()}
                        style={{
                            position: 'absolute', zIndex: 0, bottom: 3,
                            padding: 10, right: 0
                        }}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/full-screen.png')} /> 
                    </TouchableOpacity> */}
                    <MediaControls
                        isFullScreen={isFullScreen}
                        duration={duration}
                        isLoading={isLoading}
                        mainColor={COMMONTHEMECOLOR}
                        onFullScreen={() => setIsFullScreen(true)}
                        onPaused={onPaused}
                        onReplay={onReplay}
                        onSeek={onSeek}
                        onSeeking={onSeeking}
                        playerState={playerState}
                        progress={currentTime}
                    >
                        {/* <MediaControls.Toolbar>
                            <View style={styles.toolbar}>
                                <Text>I'm a custom toolbar </Text>
                            </View>
                        </MediaControls.Toolbar> */}
                    </MediaControls>
                </View>
            }
        </View>
    )
};
export default TvShowDetailsView;