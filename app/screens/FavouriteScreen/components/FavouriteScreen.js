import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import styles from './style';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE, COMMONTHEMECOLOR, FONT_FAMILY_BOLD } from '../../../utils/constant';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
function FavouriteScreen(props) {
    const navigation = useNavigation()

    function _renderItems(item, index) {
        return (
            <TouchableOpacity onPress={() => onPressMovie(item, index)} style={{
                //width: '30%',
                paddingTop: 20,
                //paddingRight: 15,
                //backgroundColor:"red"
            }}>
                <ActivityIndicator
                    size="large"
                    color={COMMONTHEMECOLOR}
                    style={{ marginTop: 20, position: 'absolute', zIndex: 1, right: 0, top: 0, bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center' }}
                    animating={props.profileLoader}
                />
                {/* 
                <Image
                    onLoadStart={() => props.onLoadStart()}
                    onLoadEnd={() => props.onLoadEnd()}
                    style={{ borderRadius: 5, width: '100%', height: 210 }}
                    resizeMode={"contain"}
                    source={{ uri: props.MovieUrl + item.movie_poster }}
                />
                */}
                <FastImage
                    style={styles.imgmvs}
                    source={{ uri: props.MovieUrl + item.movie_poster }}
                    //resizeMode={FastImage.resizeMode.contain}
                />
                <Text 
                numberOfLines={1}
                style={{ 
                    textAlign:"center",
                    fontFamily: FONT_FAMILY_REGULAR, 
                    color: WHITE_COLOR_CODE, 
                    paddingTop: 5,
                    width:120
                    }}>
                        {item.movie_name}
                </Text>
            </TouchableOpacity>
        )
    }
    function onPressMovie(item, index) {
        navigation.navigate("MovieDetail", { data: item })
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <View style={styles.header}>

                <TouchableOpacity
                    onPress={() => props.navtoback()}
                    style={[styles.hdrbkbtn, { flex: 0.5 }]}>
                    <Image
                        // style={styles.hdrbkbtn}
                        source={require("../../../assets/header-back-btn.png")}
                    />
                </TouchableOpacity>

                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 4.5 }}>
                    <Text style={styles.hdrtxt}>
                        My Favourite list
                        </Text>
                </View>
            </View>
            <View style={styles.SearchBarView}>
                {/* <TextInput
                    style={styles.SeacrhingStyle}
                    placeholder={"Search.."}
                    placeholderTextColor={WHITE_COLOR_CODE}
                    selectionColor={WHITE_COLOR_CODE}

                    onChangeText={(searchInput) => props.setSearchInput(searchInput)}
                    value={props.searchInput}
                /> */}
                <TextInput
                    style={styles.SeacrhingStyle}
                    placeholder={"Search.."}
                    placeholderTextColor={WHITE_COLOR_CODE}
                    selectionColor={WHITE_COLOR_CODE}
                    onChangeText={(text) => props.SearchMovies(text)}
                />
                <TouchableOpacity
                    onPress={() => props.onPressSearch()} style={{ position: 'absolute', right: 20, top: 10 }}>
                    <Image
                        // style={styles.hdrbkbtn}
                        source={require("../../../assets/header-search-icon.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={props.LikedMovies}
                    numColumns={3}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: COMMONTHEMECOLOR, fontFamily: FONT_FAMILY_BOLD, fontSize: 20 }}>No movie liked yet !!</Text>
                            </View>
                        )
                    }}
                    onRefresh={props.onRefresh}
                    refreshing={props.refreshing}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => _renderItems(item, index)}
                />

            </View>
        </View>
    )
}
export default FavouriteScreen;