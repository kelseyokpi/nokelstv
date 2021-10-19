import React from 'react';
import { View, Image, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
const LiveTVChannels = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <View style={{ flex: 4.5, flexDirection: "row" }} >
                    <TouchableOpacity style={styles.hdrbkbtn}
                    onPress={()=>props.navtoback()}
                    >
                    <Image
                        // style={styles.hdrbkbtn}
                        source={require("../../../assets/header-back-btn.png")}
                    />
                    </TouchableOpacity>
                    <Text style={styles.hdrtxt}>
                        Live TV Channels
                </Text>
                </View>
                <View style={styles.hdrinrvw} >
                    <TouchableOpacity
                        style={styles.hdrbkbtn}
                        onPress={() => props.OpenPopup()}>
                        <Image
                            style={styles.hdrbkbtn}
                            source={require("../../../assets/header-filter-icon.png")}
                        />
                    </TouchableOpacity>
                    <Image
                        style={styles.hdrbkbtn}
                        source={require("../../../assets/header-search-icon.png")}
                    />
                </View>
            </View>
            <View style={styles.body}>
                <View style={{ padding: 0 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={props.MOVIEDATA}
                        numColumns={4}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <View >
                                <TouchableOpacity
                                    style={styles.imgvw}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={item.MoviePoster} />
                                </TouchableOpacity>
                                <Text
                                    style={styles.title}
                                >{item.MovieTitle}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

        </View>
    );
};
export default LiveTVChannels;