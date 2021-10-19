import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Text
} from 'react-native';
import {
    FONT_FAMILY_BOLD,
    COMMON_BACKGROUND_COLOR,
    COMMONTHEMECOLOR
} from '../../../utils/constant'
import styles from './style'
const WatchList = (props) => {
    return (
        <View style={styles.watchView}>
            <View style={styles.header} >
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
                        WatchList
                        </Text>
                </View>
                <TouchableOpacity
                    style={[styles.hdrbkbtn, { flex: 0.5 }]}>
                    <Image
                        // style={styles.hdrbkbtn}
                        source={require("../../../assets/header-search-icon.png")}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 5.5 }}>

            <FlatList
                    data={props.LikedMovies}
                    numColumns={2}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: COMMONTHEMECOLOR, fontFamily: FONT_FAMILY_BOLD, fontSize: 20 }}>No movie liked yet !!</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => _renderItems(item, index)}
                />



                {/* <FlatList
                    showsVerticalScrollIndicator={false}
                    data={props.MOVIEDATA}
                    style={{ margin: 5 }}
                    numColumns={2}
                    columnWrapperStyle={{ flexDirection: "row" }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View >
                            <TouchableOpacity
                                style={styles.tchVw}>
                                <Image
                                    resizeMode={"cover"}
                                    style={styles.imgfltlst}
                                    source={item.MoviePoster} />
                            </TouchableOpacity>
                        </View>
                    )}
                /> */}
            </View>
        </View>
    )
}
export default WatchList;