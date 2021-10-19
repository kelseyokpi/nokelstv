import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {FONT_FAMILY_REGULAR,WHITE_COLOR_CODE}from '../utils/constant' 
// '.././assets/'
export default class Myapp extends Component {
    constructor() {
        super();
        this.state = {
            Default_Rating: 4,
            Max_Rating: 5,
        };
        this.Star = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
        this.Star_With_Border = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
    }
    UpdateRating(key) {
        this.setState({ Default_Rating: key });
    }
    render() {
        let React_Native_Rating_Bar = [];
        for (var i = 1; i <= this.state.Max_Rating; i++) {
            React_Native_Rating_Bar.push(
                <TouchableOpacity
                    activeOpacity={0.7}
                    key={i}
                    onPress={this.UpdateRating.bind(this, i)}>
                    <Image
                        style={styles.StarImage}
                        source={
                            i <= this.state.Default_Rating
                                ? { uri: this.Star }
                                : { uri: this.Star_With_Border }
                        }
                    />
                </TouchableOpacity>
            );
        }
        return (
            <View style={styles.MainContainer}>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.childView}>{React_Native_Rating_Bar}</View>
                    <Text style={styles.textStyle}>
                        {this.state.Default_Rating} / {this.state.Max_Rating}
                    </Text>
                </View>
                {/* <TouchableOpacity
                    // activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => alert(this.state.Default_Rating)}>
                    <Text>Get Selected Value</Text>
                </TouchableOpacity> */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    childView: {
        // justifyContent: 'center',
        flexDirection: 'row',
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    StarImage: {
        width: 15,
        height: 15,
        resizeMode: 'cover',
    },
    textStyle: {
        color: WHITE_COLOR_CODE,
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR
    }
});