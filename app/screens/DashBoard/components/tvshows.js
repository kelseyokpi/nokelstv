import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import styles from './style';
import VideoSlider from '../../../component/videoSlider';
import { useFocusEffect } from '@react-navigation/native';
import { COMMON_BACKGROUND_COLOR, GREY_COLOR_CODE, COMMONTHEMECOLOR } from '../../../utils/constant';

const TvShows = (props) => {
    useEffect(() => {
        props.setVisible(true)
    }, [])
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

                onEndReached={props.handleLoader()}
                onEndReachedThreshold={0.5}

                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }}
                    >
                        <Text> </Text>
                        <Image
                            style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={{ uri: 'file://' + item.category_path_name }}
                        />
                    </TouchableOpacity>
                )}
            />
            // <Text>AABBCCDD</Text>
        )
    }

    function _renderCountinueWatching({ item }) {
        return (
            <>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }}>
                        <Image style={styles.imgmvs} resizeMode={"stretch"}
                            source={{ uri: props.BaseUrl.episode_url + item.episode_poster }} />
                        <View style={{
                            borderBottomWidth: 4, width: '100%', backgroundColor: GREY_COLOR_CODE,
                            height: 8
                        }}>
                            <View style={{
                                borderBottomWidth: 4, height: 4, borderBottomColor: COMMONTHEMECOLOR,
                                width: parseInt(item.start_time * 100 / item.duration) + "%"
                            }} >
                            </View>
                        </View>
                        <View style={{ paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{
                                fontSize: 14,
                                color: COMMONTHEMECOLOR
                            }}>
                                {item.serial_name}
                            </Text>
                            <Text style={{
                                fontSize: 11,
                                color: COMMONTHEMECOLOR
                            }}>
                                Episode - {item.episode_no}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.hdgtxt}>
                    <Text style={{ color: 'red' }}> {item.movie_name} </Text>
                    <TouchableOpacity
                        onPress={() => props.onnavtomoviedetail(item)}
                        style={{ margin: 5 }}>
                            {
                                console.log('1234563',props.BaseUrl.poster_url + item.movie_poster)
                            }
                        <Image style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={ props.BaseUrl.poster_url + item.movie_poster ? 
                               { uri: props.BaseUrl.poster_url + item.movie_poster } :
                                require('../../../assets/header-logo.png')
                             }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onnavtoseeall()} >
                        <Text style={styles.hdgtxt2}> See all </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    //borderWidth: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    borderColor: '#373737',
                    marginTop: '2%',
                    marginBottom: "2%"
                }} />
            </>
        )
    }
    function _renderCategories({ item }) {
        return (
            <>
                <View
                    style={styles.hdgtxt}>
                    <Text style={styles.headings}>
                        {item.name}
                    </Text>
                    <TouchableOpacity
                        onPress={() => props.onnavtoseeall()}>
                        <Text style={styles.hdgtxt2}> See all </Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    borderWidth: 1, marginLeft: 5, marginRight: 5, borderColor: '#373737',
                    marginTop: '2%',
                    marginBottom: "2%"
                }} />
                {_renderCategoriesItems(item.data)}
            </>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: COMMON_BACKGROUND_COLOR }]}>
            <VideoSlider
                // landscape={true}
                // fullscreenOrientation={true}
                // // fullscreenOrientation={true}
                // fullscreenAutorotate={true}
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
                props.ContinueTVWacting.length > 0 ?
                    <View style={styles.trdingvwe}>
                        <Text style={styles.tredingtxt}> Continue Watching </Text>
                        {/* <TouchableOpacity onPress={() => props.onnavtoseeall()}>
                    <Text style={styles.hdgtxt2}> See all </Text>
                </TouchableOpacity> */}
                    </View>
                    :
                    null
            }
            <View>
                <FlatList
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={props.ContinueTVWacting}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={(item) => _renderCountinueWatching(item)}
                />
            </View>
            <View style={styles.trdingvwe}>
                <Text style={styles.tredingtxt}> Trending </Text>
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
                marginBottom: "2%"
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
                initialNumToRender={0}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={{ margin: 5 }}
                        onPress={() => props.onnavtomoviedetail(item)}>
                        <Image
                            style={styles.imgmvs}
                            resizeMode={"stretch"}
                            source={{ uri: 'file://' + item.trending_path_name }}
                        />
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
                />
            </View>
        </View>
    )
}
export default TvShows;