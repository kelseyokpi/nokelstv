import React, { useState, useEffect, useContext } from 'react';
import DashBoard from './components/dashboard';
import Movies from './components/movies';
import TvShows from './components/tvshows';
import FilterPopUp from './components/FilterPopUp';
import { FONT_FAMILY_REGULAR, COMMON_BACKGROUND_COLOR } from '../../utils/constant';
import { apiCall } from '../../utils/httpClient';
import ENDPOINTS from '../../utils/apiEndPoints';
import { UserContext, SearchDataContext } from '../../utils/UserContext';
import { View, TouchableOpacity, Text, ScrollView, StatusBar, Image } from 'react-native';
import Loader from '../../utils/Loader';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Error from '../../component/modal/error';
// import AsyncStorage from '@react-native-community/async-storage';
import styles from './components/style';
var RNFS = require('react-native-fs');

const DashBoardView = (props) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useContext(UserContext)

    const [searchDataState, setSearchDataState] = useContext(SearchDataContext)

    const [tvTrending, setTvTrending] = useState('')
    const [tvCategories, setTvCategories] = useState('')
    const [tvBanner, setTvBanner] = useState('')

    const [visible, setVisible] = useState(false)
    const [ProfileLoader, setProfileLoader] = useState(false)
    const [isSelectedCatgory, setIsSelectedCatgory] = useState(0);
    // const [icon, setIcon] = useState(false);
    const [Dialogstatus, setDialogstatus] = useState(false)
    const [Trending, setTrending] = useState([])
    const [continueWacting, setContinueWacting] = useState('')
    const [continueTVWacting, setContinueTVWacting] = useState('')
    const [BaseUrl, setBaseUrl] = useState('')
    const [tvBaseUrl, settvBaseUrl] = useState('')
    const [Categories, setCategories] = useState('')
    const [Banner, setBanner] = useState([])
    const [UserDatatype, setUserDatatype] = useState(1)
    const [errorMessage, setErrorMessage] = useState('');
    const [visibleErr, setVisibleErr] = useState(false);
    const [type, setType] = useState(1);
    const [SeacrhingVisible, setSeacrhingVisible] = useState(false);

    const [refresh, setRefresh] = useState(false);

    // images loading
    // const [startLoader, setStartLoader] = useState(false)
    // const [endLoader, setEndLoader] = useState(false)

    const [duration, setDuration] = useState('')
    const [time, setTime] = useState('')

    const [MainHeadingData, setMainHeadingData] =
        useState([
            { id: 1, name: 'Movies' },
            { id: 2, name: 'TV Shows' },
            // { id: 3, name: 'Live TV' },
            // { id: 4, name: 'Channel' },
            // { id: 5, name: 'People' },
            // { id: 6, name: 'News' }
        ], [])
    const [videoarray, setVideoarray] =
        useState([
            {
                id: 1,
                video: "http://68.183.93.52/nokelstv/upload/dashboard_video/",
                banner_image:
                    "http://68.183.93.52/nokelstv/upload/dashboard_banner/"
            },
            {
                id: 2,
                video: "http://68.183.93.52/nokelstv/upload/dashboard_video/",
                banner_image:
                    "http://68.183.93.52/nokelstv/upload/dashboard_banner/"
            },
            {
                id: 3,
                video: "http://68.183.93.52/nokelstv/upload/dashboard_video/",
                banner_image:
                    "http://68.183.93.52/nokelstv/upload/dashboard_banner/"
            },
            {
                id: 4,
                video: "http://68.183.93.52/nokelstv/upload/dashboard_video/",
                banner_image:
                    "http://68.183.93.52/nokelstv/upload/dashboard_banner/"
            },
        ], []);
    function _renderItems(item, index) {
        return (
            <TouchableOpacity
                onPress={() =>
                    _handleIsSelected(index, item)}
                style={{
                    flexDirection: 'row',
                    margin: 10,
                    marginBottom: 15,
                    marginTop: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 35,
                }}>
                <Text style={{
                    fontSize: 15,
                    fontFamily: FONT_FAMILY_REGULAR,
                    color: index === isSelectedCatgory ? '#11bfbe' : "#7b7b7b",
                    borderBottomWidth: 1,
                    borderBottomEndRadius: 5,
                    borderColor: index === isSelectedCatgory ? "#11bfbe" : '#1a1a1a',
                }}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }
    // function onLoadStart() {
    //     setStartLoader(true)
    // }
    // function onLoaderEnd() {
    //     setEndLoader(false)
    // }
    function _handleIsSelected(index, item) {
        setIsSelectedCatgory(index)
        setType(item.id)
        //DashBoardData(item.id)
        // DashBoardData(1)
        item.id === 1 ? DashBoardData(1) :
            item.id === 2 ? DashBoardDataTV(2) :
                item.id === 0 && DashBoardData(0)
        {
            item.id === 0 ? DashBoardData(0) :
                item.id === 1 ? DashBoardData(1) :
                    item.id === 2 ? DashBoardData(2) :
                        item.id === 3 ? DashBoardData(3) :
                            item.id === 4 ? DashBoardData(4) :
                                item.id === 5 ? DashBoardData(5) :
                                    DashBoardData(0)
        }
    }
    useEffect(() => {
        type === 1 ?
            DashBoardData(type)
            : type === 2 ?
                DashBoardDataTV(type)
                : DashBoardData(1)
    }, [type])
    const onRefresh = () => {
        setRefresh(true)
        // refreshing()
        DashBoardData()
    };
    // const refreshing = async () => {
    //     setRefresh(true)
    //     setVisible(true)
    //     setUserDatatype(type)
    //     const params = { type: 2 }
    //     try {
    //         const { data } = await apiCall('POST', ENDPOINTS.DASHBOARD, params);
    //         if (data.status === 200) {
    //             downloadTVInLocalStorage(data.base_url, data.base_url.dashboard_video_url,
    //                 data.data.Trending, data.data.category, data.data.dashboard_banner,
    //                 data.base_url.dashboard_banner_url, data.data.continue_watching)
    //             setBaseUrl(data.base_url)
    //             setContinueTVWacting(data.data.continue_watching)
    //         }
    //         else {
    //             setRefresh(false)
    //             setVisible(false)
    //             setVisibleErr(true)
    //             setErrorMessage(data.message)
    //         }
    //     }
    //     catch (e) {
    //         setRefresh(false)
    //         setVisible(false)
    //         setVisibleErr(true)
    //         setErrorMessage("Can't connect to server.")
    //     }
    // };
    const DashBoardDataTV = async (type) => {
        // setRefresh(true)
        setVisible(true)
        setUserDatatype(type)
        const params = { type: 2 }
        try {
            const { data } = await apiCall('POST', ENDPOINTS.DASHBOARD, params);
            if (data.status === 200) {
                downloadTVInLocalStorage(data.base_url, data.base_url.dashboard_video_url,
                    data.data.Trending, data.data.category, data.data.dashboard_banner,
                    data.base_url.dashboard_banner_url, data.data.continue_watching)
                settvBaseUrl(data.base_url)
                setContinueTVWacting(data.data.continue_watching)
            }
            else {
                setVisible(false)
                // setRefresh(false)
                setVisibleErr(true)
                setErrorMessage(data.message)
            }
            // else if (data.status === 201) {
            //     setVisible(false)
            //     // setRefresh(false)
            //     setVisibleErr(true)
            //     setErrorMessage(data.message)
            // }
            // else {
            //     navigation.navigate('SignIn')
            // }
        }
        catch (e) {
            setVisible(false)
            // setRefresh(false)
            setVisibleErr(true)
            setErrorMessage("Can't connect to server.")
        }
    }
    const DashBoardData = async (type) => {
        // setRefresh(true)
        setVisible(true)
        setUserDatatype(type)
        const params = {
            type: 1
        }
        try {
            setVisible(true)
            const { data } = await apiCall('POST', ENDPOINTS.DASHBOARD, params);
            if (data.status === 200) {
                downloadInLocalStorage(data.base_url, data.base_url.dashboard_video_url,
                    data.data.Trending, data.data.category, data.data.dashboard_banner,
                    data.base_url.dashboard_banner_url, data.data.continue_watching)
                setBaseUrl(data.base_url)
                setContinueWacting(data.data.continue_watching)
                // setDuration(da),
                // setTime()
            }
            // else {
            //     setRefresh(false)
            //     setVisible(false)
            //     setVisibleErr(true)
            //     setErrorMessage(data.message)
            // }
            else if (data.status === 201) {
                setRefresh(false)
                setVisible(false)
                setVisibleErr(true)
                setErrorMessage(data.message)
            }
            else {
                navigation.navigate('SignIn')
            }
        }
        catch (e) {
            setRefresh(false)
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage("Can't connect to server.")
        }
    }
    const downloadTVInLocalStorage = (baseUrl, bannerbase_url, trendingData, categoryData,
        dashboardBanner, DashboardUrl,) => {
        setVisible(true)
        try {
            trendingData.map((item, index) => {
                const item_url = baseUrl.poster_url + item.post_poster;
                let filename = item_url.substring(item_url.lastIndexOf("/") + 1, item_url.length);
                let trending_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;
                RNFS.exists(trending_path_name).then(exists => {
                    if (exists) {
                        trendingData[index].trending_path_name = trending_path_name;
                    } else {
                        RNFS.downloadFile({
                            fromUrl: item_url,
                            toFile: trending_path_name.replace(/%20/g, "_"),
                            background: true
                        })
                            .promise.then(res => {
                                trendingData[index].trending_path_name = trending_path_name;
                            })
                            .catch(err => {
                            });
                    }
                    setTvTrending(trendingData)
                });
            })
            categoryData.map((item, index) => {
                item.data.map((row, index) => {
                    const catgeory_url = baseUrl.poster_url + row.post_poster;
                    let filename = catgeory_url.substring(catgeory_url.lastIndexOf("/") + 1, catgeory_url.length);
                    let category_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;

                    RNFS.exists(category_path_name).then(exists => {
                        if (exists) {
                            item.data[index].category_path_name = category_path_name;
                        } else {
                            RNFS.downloadFile({
                                fromUrl: catgeory_url,
                                toFile: category_path_name.replace(/%20/g, "_"),
                                background: true
                            })
                                .promise.then(res => {
                                    item.data[index].category_path_name = category_path_name;
                                })
                                .catch(err => {
                                });
                        }
                        setTvCategories(categoryData)
                    });
                })
            })
            dashboardBanner.map((item, index) => {
                const banner_url = bannerbase_url + item.video;
                let filename = banner_url.substring(banner_url.lastIndexOf("/") + 1, banner_url.length);
                let banner_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;
                RNFS.exists(banner_path_name).then(exists => {
                    if (exists) {
                        dashboardBanner[index].banner_path_name = banner_path_name;
                    } else {
                        RNFS.downloadFile({
                            fromUrl: banner_url,
                            toFile: banner_path_name.replace(/%20/g, "_"),
                            background: true
                        })
                            .promise.then(res => {
                                dashboardBanner[index].banner_path_name = banner_path_name;
                            })
                            .catch(err => {
                            });
                    }
                    dashboardBanner[index].DashboardUrl = DashboardUrl;
                    setTvBanner(dashboardBanner)
                });
            })
            setVisible(false)
        } catch (error) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(error.toString())
        }
    }
    const downloadInLocalStorage = (baseUrl, bannerbase_url, trendingData, categoryData,
        dashboardBanner, DashboardUrl) => {
        setVisible(true)
        try {
            trendingData.map((item, index) => {
                const item_url = baseUrl.poster_url + item.post_poster;
                let filename = item_url.substring(item_url.lastIndexOf("/") + 1, item_url.length);
                let trending_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;

                RNFS.exists(trending_path_name).then(exists => {
                    if (exists) {
                        trendingData[index].trending_path_name = trending_path_name;
                    } else {
                        RNFS.downloadFile({
                            fromUrl: item_url,
                            toFile: trending_path_name.replace(/%20/g, "_"),
                            background: true
                        })
                            .promise.then(res => {
                                trendingData[index].trending_path_name = trending_path_name;
                            })
                            .catch(err => {
                            });
                    }
                    setTrending(trendingData)
                });
            })
            categoryData.map((item, index) => {
                item.data.map((row, index) => {
                    const catgeory_url = baseUrl.poster_url + row.post_poster;
                    let filename = catgeory_url.substring(catgeory_url.lastIndexOf("/") + 1, catgeory_url.length);
                    let category_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;

                    RNFS.exists(category_path_name).then(exists => {
                        if (exists) {
                            item.data[index].category_path_name = category_path_name;
                        } else {
                            RNFS.downloadFile({
                                fromUrl: catgeory_url,
                                toFile: category_path_name.replace(/%20/g, "_"),
                                background: true
                            })
                                .promise.then(res => {
                                    item.data[index].category_path_name = category_path_name;
                                })
                                .catch(err => {
                                });
                        }
                        setCategories(categoryData)

                        setSearchDataState(categoryData)
                    });
                })
            })
            // @#$%^&*() SAS
            // continuewatching.map((item, index) => {
            //     item.data.map((row, index) => {
            //         const catgeory_url = baseUrl.poster_url + row.post_poster;
            //         let filename = catgeory_url.substring(catgeory_url.lastIndexOf("/") + 1, catgeory_url.length);
            //         let category_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;

            //         RNFS.exists(category_path_name).then(exists => {
            //             if (exists) {
            //                 item.data[index].category_path_name = category_path_name;
            //             } else {
            //                 RNFS.downloadFile({
            //                     fromUrl: catgeory_url,
            //                     toFile: category_path_name.replace(/%20/g, "_"),
            //                     background: true
            //                 })
            //                     .promise.then(res => {
            //                         item.data[index].category_path_name = category_path_name;
            //                     })
            //                     .catch(err => {
            //                     });
            //             }
            //             setContinueWacting(continuewatching)
            //         });
            //     })
            // })
            //
            dashboardBanner.map((item, index) => {
                const banner_url = bannerbase_url + item.video;
                let filename = banner_url.substring(banner_url.lastIndexOf("/") + 1, banner_url.length);
                let banner_path_name = RNFS.DocumentDirectoryPath + '/' + filename;//item.filename;//filename;
                RNFS.exists(banner_path_name).then(exists => {
                    if (exists) {
                        dashboardBanner[index].banner_path_name = banner_path_name;
                    } else {
                        RNFS.downloadFile({
                            fromUrl: banner_url,
                            toFile: banner_path_name.replace(/%20/g, "_"),
                            background: true
                        })
                            .promise.then(res => {
                                dashboardBanner[index].banner_path_name = banner_path_name;
                            })
                            .catch(err => {
                            });
                    }
                    dashboardBanner[index].DashboardUrl = DashboardUrl;
                    setBanner(dashboardBanner)
                });
            })
            setVisible(false)
        } catch (error) {
            setVisible(false)
            setVisibleErr(true)
            setErrorMessage(error.toString())
        }
    }
    function onnavtoprofile() {
        props.navigation.navigate("Profile")
    }
    function navtodrawer() {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    function OpenPopup() {
        setDialogstatus(true)
    }
    function closePopup() {
        setDialogstatus(false)
    }
    function onnavtomoviedetail(data) {
        // setRefresh(false)
        UserDatatype === 1 ?
            props.navigation.navigate("MovieDetail", { data: data })
            : UserDatatype === 2 ?
                props.navigation.navigate("TvShowDetails", { data: data })
                : UserDatatype === 3 ?
                    props.navigation.navigate("NewsDetails", { data: data })
                    : null
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
    const onLoadPosterStart = () => {
        setProfileLoader(true)
    }
    const onLoadEnd = () => {
        setProfileLoader(false)
    }
    function handleLoader() {
        setVisible(false)
    }
    // const _handleMovieSearching = async (value) => {
    //     // if (value.length > 0) {
    //     //     var params = {
    //     //         searchdata: value
    //     //     }
    //     //     try {
    //     //         const response = await apiCall('POST', ENDPOINTS.DASHBOARD_SEARCHING, params)
    //     //         if (response.status === 200) {
    //     //             setIsLoading(false)
    //     //             setTrending(data.data.Trending);
    //     //             setCategorydata(data.data.category);
    //     //             setPosterpath(data.base_url.movie_poster_url);
    //     //             downloadInLocalStorage(data.base_url, data.base_url.dashboard_video_url, data.data.Trending, data.data.category, data.data.dashboard_banner, data.base_url.dashboard_banner_url)
    //     //         } else {
    //     //             setIsLoading(false)
    //     //             // alert(JSON.stringify(data))
    //     //         }
    //     //     } catch (error) {
    //     //         setIsLoading(false)
    //     //     }

    //     // } else {
    //     //     // getdashboarddata();
    //     // }
    // }
    async function _handleSearching() {
        alert('Working')
        setSeacrhingVisible(true)
        // navigation.pop('1')
        navigation.push('Searching')
    }
    return (
        <View style={[styles.container, { backgroundColor: COMMON_BACKGROUND_COLOR }]}>
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <View style={styles.header}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    {userData.email ?
                        <TouchableOpacity
                            style={{ padding: 10, paddingRight: 0, paddingLeft: 5 }}
                            onPress={() => navtodrawer()}>
                            <Image
                                source={require('../../assets/header-hamburger-icon.png')}
                                style={styles.logoimg}
                            />
                        </TouchableOpacity> : null
                    }
                    {SeacrhingVisible === false ?
                        <TouchableOpacity>
                            <Image style={styles.logoimg}
                                source={require('../../assets/header-logo.png')} />
                        </TouchableOpacity> : null}
                </View>
                <View style={styles.hdrscdvw}>
                    {/* {SeacrhingVisible === false ?
                        <TouchableOpacity
                            style={{ padding: 5 }}
                            onPress={() => OpenPopup()}>
                            <Image
                                source={require("../../assets/header-filter-icon.png")}
                                style={styles.hdrtcimg} />
                        </TouchableOpacity> : null
                    } */}
                    <TouchableOpacity
                        onPress={() => _handleSearching()}
                        style={{ padding: 5 }}>
                        <Image
                            source={require("../../assets/header-search-icon.png")}
                            style={styles.hdrtcimg} />
                    </TouchableOpacity>
                    {userData.email ?
                        <TouchableOpacity
                            style={{ padding: 5 }}
                            onPress={() => onnavtoprofile()}>
                            <Image
                                source={require("../../assets/header-user-icon.png")}
                                style={styles.hdrtcimg} />
                        </TouchableOpacity> : null
                    }
                </View>
            </View>
            {visible && <Loader state={visible} />}
            <ScrollView
                //contentContainerStyle={{flexGrow:0.1}}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <DashBoard

                    // startLoader={startLoader}
                    // endLoader={endLoader}
                    // onLoadStart={onLoadStart}
                    // onLoaderEnd={onLoaderEnd}
                    // setEndLoader={setEndLoader}

                    refresh={refresh}
                    onRefresh={onRefresh}
                    _handleSearching={_handleSearching}
                    MainHeadingData={MainHeadingData}
                    onLoadPosterStart={onLoadPosterStart}
                    ProfileLoader={ProfileLoader}
                    onLoadEnd={onLoadEnd}
                    BaseUrl={BaseUrl}
                    videoarray={videoarray}
                    navtodrawer={navtodrawer}
                    onnavtomoviedetail={(data) => onnavtomoviedetail(data)}
                    onnavtoprofile={onnavtoprofile}
                    OpenPopup={() => OpenPopup()}
                    onnavtoseeall={() => onnavtoseeall()}
                    //dashboard apis
                    _handleIsSelected={_handleIsSelected}
                    isSelectedCatgory={isSelectedCatgory}
                    // setIcon={setIcon}
                    // icon={icon}
                    _renderItems={_renderItems}
                    userData={userData}
                    // _handleMovieSearching={_handleMovieSearching}
                    SeacrhingVisible={SeacrhingVisible}
                    // tvShows={tvShows}
                    type={type}
                />
                {
                    type === 1 ?
                        <Movies
                            Banner={Banner}
                            Trending={Trending}
                            Categories={Categories}
                            BaseUrl={BaseUrl}
                            continueWacting={continueWacting}
                            onnavtomoviedetail={(data) => onnavtomoviedetail(data)}
                            onnavtoseeall={() => onnavtoseeall()}
                            onRefresh={onRefresh}
                            refresh={refresh}
                            setVisible={setVisible}
                            handleLoader={handleLoader}
                        // visible={visible}
                        />
                        : null
                }
                {
                    type === 2 ?
                        <TvShows
                            Banner={tvBanner}
                            Trending={tvTrending}
                            Categories={tvCategories}
                            BaseUrl={tvBaseUrl}
                            ContinueTVWacting={continueTVWacting}
                            onnavtomoviedetail={(data) => onnavtomoviedetail(data)}
                            onnavtoseeall={() => onnavtoseeall()}
                            handleLoader={handleLoader}
                            setVisible={setVisible}
                        // onRefresh={onRefresh}
                        />
                        : null
                }
            </ScrollView>
            <View >
                <FilterPopUp
                    status={Dialogstatus}
                    DashBoardData={DashBoardData}
                    closePopup={() => closePopup()}
                />
                <Error
                    message={errorMessage}
                    visible={visibleErr}
                    closeModel={() => setVisibleErr(false)}
                />
            </View>
        </View >
    )
}
export default DashBoardView;
