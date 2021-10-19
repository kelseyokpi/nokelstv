import React from 'react'
import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, COMMONTHEMECOLOR, LIGHT_WHITE_COLOR_CODE, WHITE_COLOR_CODE } from '../../../utils/constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 4,
        backgroundColor: '#1a1a1a',
        padding: 10,
    },
    questionansvwe: {
        padding: 10
    },
    questiontxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 16,
        color: COMMONTHEMECOLOR
    },
    answertxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
        color: LIGHT_WHITE_COLOR_CODE,
        marginTop: 8,
        lineHeight: 19,
        paddingLeft: 7
    },
    helptxt: {
        fontSize: 25,
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE,
        paddingLeft: 10,
        paddingTop: 10
    },
    mainvwe: { flex: 1 },
    headbvw: {
        flex: 0.8,
        flexDirection: 'row'
    },
    headbackimg: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerlogo:{
        flex: 0.3, justifyContent: 'center'
    }
})
export default styles;