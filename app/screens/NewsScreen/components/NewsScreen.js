import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
    StatusBar
} from 'react-native';
import styles from './style';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE } from '../../../utils/constant'
function NewsScreen(props) {
    function _renderItems(item, index) {
        const imgstyle = {
            width: 200,
            height: 140,
            borderRadius: 12,
            margin: 2
        }
        const txtstyle = {
            fontSize: 16,
            fontFamily: FONT_FAMILY_REGULAR,
            color: WHITE_COLOR_CODE
        }
        return (
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        style={imgstyle}
                        source={item.img}
                    />
                </View>
                <Text style={txtstyle}>
                    {item.txtdata}
                </Text>
            </View >
        )
    }
    const mnimgstyle = {
        width: "95%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 15
    }
    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={"transparent"} />
            <View style={styles.header} >
                <View style={styles.bckbtn} >
                    <TouchableOpacity
                    onPress={()=>props.navtoback()}
                    style={styles.hdrbkbtn}>
                    <Image
                        // style={styles.hdrbkbtn}
                        source={require("../../../assets/header-back-btn.png")}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ alignSelf: "center" }}>
                        <Text style={styles.hdrtxt}>
                            News
                        </Text>
                    </TouchableOpacity>
                </View>
            </View >
            <View style={styles.body}>
                <Image
                    style={mnimgstyle}
                    resizeMode={"cover"}
                    source={require
                        ('../../../assets/newscorona.jpeg')}
                />
                <FlatList
                    data={props.MainHeadingData}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => _renderItems(item, index)}
                />
            </View>
        </View>
    )
}
export default NewsScreen;