import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import styles from './style';
import VideoSlider from '../../../component/videoSlider'
import { useFocusEffect } from '@react-navigation/native';
import { COMMONTHEMECOLOR, COMMON_BACKGROUND_COLOR, GREY_COLOR_CODE, WHITE_COLOR_CODE } from '../../../utils/constant';
//81
import FastImage from 'react-native-fast-image';
const Movies = (props) => {
    useEffect(() => {
        props.setVisible(true)
        return(()=>{
            // alert('12')
            setVideoSound(true)
        })
    }, [])

    useFocusEffect(
        React.useCallback(() => {
          return () => {
            setVideoSound(true)
          };
        }, [])
      );

    const [videoSound, setVideoSound] = useState(true)

    function _handleVideoSound() {
        setVideoSound(!videoSound)
    }
    function _renderCategoriesItems(item) {
        return (
            <FlatList
                data={item}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                // onRefresh={() => props.onRefresh()}
                // refreshing={props.refresh}
                onEndReached={props.handleLoader()}
                onEndReachedThreshold={0.5}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }} >
                        <Text> </Text>
                        {/*
                        <Image
                            style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={{ uri: 'file://' + item.category_path_name }}
                        />
                        */}
                        <FastImage
                            style={styles.imgmvs}
                            source={{
                                uri: 'file://' + item.category_path_name,
                                headers: { Authorization: 'nokelstv' },
                                priority: FastImage.priority.normal,
                            }}
                            //resizeMode={FastImage.resizeMode.contain}
                        />
                    </TouchableOpacity>
                )}
            />
        )
    }
    function _renderCategories({ item }) {
        return (
            <>
                <View style={styles.hdgtxt}>
                    <Text style={styles.headings}> {item.name} </Text>
                    <TouchableOpacity onPress={() => props.onnavtoseeall()} >
                        <Text style={styles.hdgtxt2}> See all </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderWidth: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#373737',
                    marginTop: '2%',
                    marginBottom: "2%"
                }} />
                {_renderCategoriesItems(item.data)}
            </>
        )
    }
    function _renderCountinueWatching({ item }) {
        return (
            <>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    {/* <Text style={{ color: 'red' }}> {item.movie_name} </Text> */}
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{
                            margin: 5,
                        }}>
                        {/* source={props.url.movie_poster_url + props.dataget.movie_poster ?
                            { uri: props.url.movie_poster_url + props.dataget.movie_poster }
                            : require('../../../assets/header-logo.png')
                        } */}
                        {/*
                        <Image style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={props.BaseUrl.poster_url + item.movie_poster ?
                                { uri: props.BaseUrl.poster_url + item.movie_poster }
                                :
                                require('../../../assets/header-logo.png')
                            }
                        />
                        */}
                        <FastImage
                            style={styles.imgmvs}
                            /*source={{
                                uri: 'file://' + item.category_path_name,
                                headers: { Authorization: 'nokelstv' },
                                priority: FastImage.priority.normal,
                            }}*/
                            source={props.BaseUrl.poster_url + item.movie_poster ?
                                { uri: props.BaseUrl.poster_url + item.movie_poster }
                                :
                                require('../../../assets/header-logo.png')
                            }
                            //resizeMode={FastImage.resizeMode.contain}
                        />
                        {/* <ActivityIndicator
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                            animating={props.visible}
                        /> */}
                        <View style={{
                            borderBottomWidth: 4, width: '100%', backgroundColor: GREY_COLOR_CODE,
                            height: 8
                        }}>
                            <View
                                style={{
                                    borderBottomWidth: 4, height: 4,
                                    // width: RemainingMovieTime === duration ? time : time,
                                    borderBottomColor: COMMONTHEMECOLOR,
                                    width: parseInt(item.start_time * 100 / item.duration) + "%"

                                }}
                            >
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.hdgtxt}>
                    <Text style={{ color: 'red' }}> {item.movie_name} </Text>
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }}>
                        <Image style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={{ uri: props.BaseUrl.poster_url + item.movie_poster }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onnavtoseeall()} >
                        <Text style={styles.hdgtxt2}> See all </Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={{
                    borderWidth: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#373737',
                    marginTop: '2%',
                    marginBottom: "2%"
                }} /> */}
            </>
        )
    }
    return (

        <View style={[styles.container, { backgroundColor: COMMON_BACKGROUND_COLOR }]}>
            <VideoSlider
                fullscreenOrientation={true}
                fullscreenAutorotate={true}
                videoArray={props.Banner}
                isMuted={videoSound}
            />
            <TouchableOpacity
                onPress={() => _handleVideoSound()}
                style={{
                    flex: 1, 
                    justifyContent: 'flex-end', 
                    alignItems: 'flex-end', 
                    //backgroundColor:"red",
                    bottom:20
                }}>
                {
                    !videoSound ?
                        <Image style={{ width: 25, height: 25, marginRight: 10, }}
                            source={require('../../../assets/volume.png')}
                        />
                        :
                        <Image style={{ width: 25, height: 25, marginRight: 10, }}
                            source={require('../../../assets/mute.png')}
                        />
                }
            </TouchableOpacity>
            {
                props.continueWacting.length > 0 ?
                    <View style={styles.trdingvwe}>
                        <Text style={styles.tredingtxt}> Continue Watching </Text>
                        {/* <TouchableOpacity onPress={() => props.onnavtoseeall()}>
                    <Text style={styles.hdgtxt2}> See all </Text>
                </TouchableOpacity> */}
                    </View>
                    :
                    null
            }
            {/* countinue */}
            <FlatList
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={props.continueWacting}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => _renderCountinueWatching(item)}

                onRefresh={() => props.onRefresh()}
                refreshing={props.refresh}
            />
            <View style={styles.trdingvwe}>
                <Text style={styles.tredingtxt}> Trending  </Text>
                <TouchableOpacity onPress={() => props.onnavtoseeall()}>
                    <Text style={styles.hdgtxt2}> See all </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                borderWidth: 1,
                marginLeft: 5,
                marginRight: 5,
                borderColor: '#373737',
                marginTop: '2%',
                marginBottom: "2%",
            }} />
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={props.Trending}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                // i have add this line.... {
                initialNumToRender={0}
                // }
                // onRefresh={() => props.onRefresh()}
                // refreshing={props.refresh}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }}>
                        {/* { props.startLoader === true ? */}

                        {/* source={ props.url.movie_poster_url + props.dataget.movie_poster ?
                                         { uri: props.url.movie_poster_url + props.dataget.movie_poster }
                                         :  require('../../../assets/header-logo.png')
                                    } */}
                        {/*
                        <Image
                            onLoadStart={props.startLoader}
                            onLoaderEnd={props.endLoader}
                            style={styles.imgmvs}
                            resizeMode={"stretch"}
                            // source={{ uri: 'file://' + item.trending_path_name }}
                            source={'file://' + item.trending_path_name ?
                                { uri: 'file://' + item.trending_path_name } :
                                require('../../../assets/header-logo.png')
                            }
                        />*/}
                        <FastImage
                            style={styles.imgmvs}
                            /*
                            source={{
                                uri: 'file://' + item.category_path_name,
                                headers: { Authorization: 'nokelstv' },
                                priority: FastImage.priority.normal,
                            }}*/
                            source={'file://' + item.trending_path_name ?
                                { uri: 'file://' + item.trending_path_name } :
                                require('../../../assets/header-logo.png')
                            }
                            //resizeMode={FastImage.resizeMode.contain}
                        />
                        {/* :
                            props.endLoader === false
                        } */}
                        {/* <ActivityIndicator
                            style={{ marginTop: 20, position: 'absolute', zIndex: 1, right: 0, top: 0, bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
                            animating={props.profileLoader}
                            size="small" color={COMMONTHEMECOLOR}
                        /> */}
                    </TouchableOpacity>
                )}
            />
            <View >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={props.Categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => _renderCategories(item)}
                // onRefresh={() => props.onRefresh()}
                // refreshing={props.refresh}
                />
            </View>
        </View>
    )
}
export default Movies