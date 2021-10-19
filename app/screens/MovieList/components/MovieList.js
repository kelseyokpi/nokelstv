import React from 'react';
import { View, Image, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
const MovieList = (props) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <View style={{ flex: 4.5, flexDirection: "row" }} >
                    <TouchableOpacity
                        style={styles.hdrbkbtn}
                        onPress={() => props.navtobkbtn()}>
                        <Image
                            source={require("../../../assets/header-back-btn.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.hdrtxt}>
                        Movies
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
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={props.MOVIEDATA}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() =>
                                props.onnavtoMovieDetail(item)}
                            style={styles.imgvw}>
                            <Image
                                style={styles.imgfltlst}
                                resizeMode="cover"
                                source={{
                                    uri: props.baseURL.movie_poster_url + item.movie_poster
                                }} />
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    );
};
export default MovieList;