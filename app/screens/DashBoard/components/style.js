import { StyleSheet, Platform } from 'react-native';
import {
    FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, COMMON_BACKGROUND_COLOR,
    WHITE_COLOR_CODE
} from '../../../utils/constant'
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: '12%',
        width: "100%",
        backgroundColor: COMMON_BACKGROUND_COLOR,
        paddingTop: 17,
    },
    logoimg: {
        marginTop: 5,
        marginLeft: 10,
    },
    hdrscdvw: {
        alignItems: "center",
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    hdrtcimg: {
        marginRight: "5%"
    },
    body: {
        flex: 5,
        backgroundColor: "#1a1a1a",
    },
    headings: {
        marginLeft: 5,
        color: "#ffffff",
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
    },
    fltlsttc: {
        flexDirection: 'row',
        marginLeft: 3,
        marginRight: 8,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 35,
    },
    fltlsttxt: {
        fontSize: 14,
        color: '#7b7b7b',
        fontFamily: FONT_FAMILY_REGULAR,
    },
    hdgtxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "10%",
        // marginBottom: "0.5%"
    },
    hdgtxt2: {
        fontSize: 16,
        color: '#707070',
        marginRight: 5,
        fontFamily: FONT_FAMILY_REGULAR
    },
    imgmvs: {
        width: 120,
        // borderRadius: 15,
        height: 180,
        margin: 0,
    },
    title: {
        color: '#b8b8b8',
        fontSize: 13,
        fontFamily: FONT_FAMILY_REGULAR,
        width: 90,
        textAlign: 'center',
    },
    trdingvwe: {
        paddingLeft: 6,
        paddingTop: Platform.OS === 'ios' ? 5 : 5,
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    tredingtxt: {
        color: WHITE_COLOR_CODE,
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 17
    }
})
export default Styles;