import React, { Fragment } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import { YELLOW_COLOR_CODE, COMMON_BUTTON_FONT_SIZE, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR, COMMONBTNCOLOR } from '../../utils/constant';
const Button = (props) => {
    const {
        buttonText, style, buttonLabelStyle, onPress, LeftBtnImage, RightBtnImage, touch
    } = props;
    const {
        button, buttonLabel
    } = styles;
    return (
        <Fragment>
            <TouchableOpacity
                onPress={onPress}
                disabled={touch === true ? true : false}
                style={[button, style]}>
                <Image
                    style={{ marginRight: 15 }}
                    source={LeftBtnImage}
                />
                <Text style={[buttonLabel, buttonLabelStyle]}>
                    {buttonText}
                </Text>
                <Image
                    source={RightBtnImage}
                />
            </TouchableOpacity>
        </Fragment>
    );
}
Button.Button = {
    buttonText: "Submit",
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: COMMONBTNCOLOR,
        marginLeft: 15,
        marginRight: 15,
        padding: 13,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: WHITE_COLOR_CODE
    },
    buttonLabel: {
        fontSize: COMMON_BUTTON_FONT_SIZE,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        paddingBottom: Platform.OS === "ios" ? 5 : 3
    },
})
export default Button;