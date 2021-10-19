import React from 'react';
import { View, Image, Text, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
const NewsList = (props) => {
    // alert(JSON.stringify(props.baseURL))
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.header}>
                <View style={{ flex: 4.5, flexDirection: "row" }} >
                    <TouchableOpacity 
                        style={styles.hdrbkbtn}
                    onPress={()=> props.navtobkbtn()}>
                        <Image
                            source={require("../../../assets/header-back-btn.png")}
                        />
                    </TouchableOpacity>
                    <Text style={styles.hdrtxt}>
                        News
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
                        data={props.NEWSDATA}
                        numColumns={1}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => (
                            <View >
                                <TouchableOpacity
                                onPress={()=>props.navtodetails(item) }
                                    style={styles.imgvw}>
                                    <Image
                                        style={styles.imgfltlst}
                                        source={{
                                            uri:
                                                props.baseURL.poster_url
                                                + item.image
                                        }} />
                                </TouchableOpacity>
                                <Text
                                    style={styles.title}
                                >{item.title
                                    }</Text>
                            </View>
                        )}
                    />
                </View>
            </View>

        </View>
    );
};
export default NewsList;