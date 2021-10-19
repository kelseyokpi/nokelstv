import { StyleSheet, Platform } from 'react-native';
import {
    FONT_FAMILY_REGULAR,
    COMMONTXTCOLOR,
    COMMONTHEMECOLOR,
    COMMONBTNCOLOR
} from '../../../utils/constant'
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        position: 'absolute',
        top: 0,
        flexDirection: "row",
        marginTop: 25,
        zIndex: 1
    },
    logoimg: {
        marginTop: '5%',
        marginLeft: 10,
    },
    hdrscdvw: {
        marginTop: '4%',
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
    },
    hdrtctxt: {
        color: COMMONTXTCOLOR,
        //marginRight: 15,
        fontSize: 16,
        fontFamily: FONT_FAMILY_REGULAR,
        marginTop: Platform.OS === 'ios' ? 10 : 0
    },
    body: {
        flex: 4,
        justifyContent: "flex-end",
        paddingBottom: 60
    },
    bgtxt: {
        color: COMMONTHEMECOLOR,
        fontSize: 28,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
        marginBottom: 12
    },
    bdyinfo: {
        color: COMMONTXTCOLOR,
        textAlign: "center",
        fontSize: 17,
        fontFamily: FONT_FAMILY_REGULAR,
        lineHeight: Platform.OS === 'ios' ? 22 : 20
    },
    footer: {
        marginBottom: 20
    },
    btncon: {
        height: 72,
        width: "85%",
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: COMMONBTNCOLOR,
        //marginTop: 24,
        justifyContent: "center",
        //marginBottom: 40
    },
    btncontxt: {
        color: COMMONTXTCOLOR,
        textAlign: "center",
        fontSize: 22,
        fontFamily: FONT_FAMILY_REGULAR
    },
    toucmodalvwe: {
        right: 0,
        position: 'absolute',
        zIndex: 1,
        padding: 15
    },
    goimg:{
        width: 40, height: 40
    }
})
export default Styles;