import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StatusBar,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import VideoSlider from '../../../component/videoSlider'
import styles from './style';
import Movies from './movies';
import { COMMON_BACKGROUND_COLOR } from '../../../utils/constant';
const DashBoard = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: COMMON_BACKGROUND_COLOR }]}>
            <StatusBar translucent={true} backgroundColor={"transparent"} />
            <View style={styles.header}>
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                    {props.userData.email ?
                        <TouchableOpacity
                            style={{ padding: 10, paddingRight: 0, paddingLeft: 5 }}
                            onPress={() => props.navtodrawer()}>
                            <Image
                                source={require('../../../assets/header-hamburger-icon.png')}
                                style={styles.logoimg}
                            />
                        </TouchableOpacity> : null
                    }
                    {props.SeacrhingVisible === false ?
                        <TouchableOpacity>
                            <Image style={styles.logoimg}
                                source={require('../../../assets/header-logo.png')} />
                        </TouchableOpacity> : null}
                </View>
                <View style={styles.hdrscdvw}>
                    {props.SeacrhingVisible === false ?
                        <TouchableOpacity
                            style={{ padding: 5 }}
                            onPress={() => props.OpenPopup()}>
                            <Image
                                source={require("../../../assets/header-filter-icon.png")}
                                style={styles.hdrtcimg} />
                        </TouchableOpacity> : null
                    }
                    {/* {props.SeacrhingVisible &&
                        <View style={{
                            width: '62%',
                            borderBottomColor: COMMONTHEMECOLOR,
                            borderBottomWidth: 2
                        }}>
                            <TextInput
                                style={{ color: WHITE_COLOR_CODE }}
                                onChangeText={(e) => props._handleMovieSearching(e)}
                                placeholderTextColor={WHITE_COLOR_CODE}
                                placeholder={"Seacrh your favoutries"}
                            />
                        </View>} */}

                    <TouchableOpacity
                        onPress={() => props._handleSearching()}
                        style={{ padding: 5 }}>
                        <Image
                            source={require("../../../assets/header-search-icon.png")}
                            style={styles.hdrtcimg} />
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={() => props._handleSearching()}
                        style={{ padding: 5 }}>
                        <Image
                            source={require("../../../assets/header-search-icon.png")}
                            style={styles.hdrtcimg} />
                    </TouchableOpacity> */}

                    {props.userData.email ?
                        <TouchableOpacity
                            style={{ padding: 5 }}
                            onPress={() => props.onnavtoprofile()}>
                            <Image
                                source={require("../../../assets/header-user-icon.png")}
                                style={styles.hdrtcimg} />
                        </TouchableOpacity> : null
                    }
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.body}>
                    <FlatList
                        data={props.MainHeadingData}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        // style={{ marginTop: 5, marginBottom: 5 }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => props._renderItems(item, index)}
                    />
                    <Movies
                        Banner={props.Banner}
                        Trending={props.Trending}
                        Categories={props.Categories}
                        _renderCategories={props._renderCategories}
                    />
                </View>
            </ScrollView>
        </View >
    )
}
export default DashBoard;