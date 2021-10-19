import React from 'react'
import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, COMMONTHEMECOLOR, WHITE_COLOR_CODE } from '../../../utils/constant';
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
    helptxt: {
        fontSize: 22,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COMMONTHEMECOLOR,
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
    headerlogo: {
        flex: 0.3, justifyContent: 'center'
    },
    definetxtvwe: {
        paddingTop: 10, paddingLeft: 15
    },
    definetextmainvwe: {
        fontSize: 15,
        color: COMMONTHEMECOLOR,
        fontFamily: FONT_FAMILY_REGULAR
    },
    dectxt: {
        fontSize: 13,
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: 19,
        paddingTop: 10,
    },
    viewmargintop: { marginTop: 10 },
    termsandcon: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18, color: COMMONTHEMECOLOR,
        paddingTop: 8
    }
})
export default styles;