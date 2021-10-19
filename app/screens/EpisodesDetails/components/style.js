import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, COMMONTHEMECOLOR, WHITE_COLOR_CODE,
    COMMONBTNCOLOR
} from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a",
    },
    header: {
        flex: 0.8,
        backgroundColor: "#1a1a1a",
        flexDirection: "row",
        paddingTop: 30,
    },
    hdrview: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end"
    },
    hdrtxt: {
        color: "#ffffff",
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
    },
    hdrtxtview: {
        margin: 5
    },
    body: {
        flex: 5.4,
        backgroundColor: "#1a1a1a",
        padding: 5
    },
    mainimg: {
        height: 280,
        width: "100%"
    },
    viewoptions: {
        width: '80%',
        height: 60,
        backgroundColor: COMMONBTNCOLOR,
        alignSelf: "flex-end",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 0,
        padding: 0,
        bottom: 28,
    },
    imgvwopt: {
        alignSelf: "center"
    },
    txtvwopt: {
        color: "#ffffff",
        textAlign: "center",
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 12
    },
    mntxtvw: {
        flexDirection: "row",
    },
    mntxt: {
        flex: 4
    },
    mnbgtxt: {
        color: WHITE_COLOR_CODE,
        fontSize: 22,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "left",
        paddingLeft: '12%',
    },
    mnsmltxt: {
        color: "#4d4d4d",
        textAlign: "left",
        paddingLeft: '12%',
        fontSize: 12,
        fontFamily: FONT_FAMILY_BOLD
    },
    mntxtimg: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    allbtnsvw: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10
    },
    btnsvw: {
        // height: 35,
        // width: 100,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        marginTop: 5,
        borderWidth: 1,
        borderColor: "#4d4d4d",
        justifyContent: "center"
    },
    WatchMovieStyle: {
        borderWidth: 1,
        borderColor: "#4d4d4d",
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: COMMONTHEMECOLOR,
        alignSelf: 'center', paddingHorizontal: 20, borderRadius: 25
    },
    btnstxt: {
        color: "#ffffff",
        textAlign: "center",
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 12
    },
    hdng: {
        fontSize: 20,
        color: "#ffffff",
        marginLeft: "2%",
        marginTop: "4%",
        marginBottom: '2%',
        fontFamily: FONT_FAMILY_REGULAR
    },
    imgfltlst: {
        width: 110,
        borderRadius: 55,
        height: 110
    },
    title: {
        color: '#7e7e7e',
        fontSize: 14,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
    },
    imgfltlst2: {
        width: 100,
        borderRadius: 8,
        height: 150,
        margin: 2,
    },
    movienamerct: {
        color: '#7e7e7e',
        fontSize: 12,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "left",
        marginLeft: "1%",
    },
    footer: {
        flexDirection: "row",
        backgroundColor: "#1a1a1a",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: '6%',
        paddingTop: "1.5%",
    },
    bottomButtons: {
    },
    bottomButtonsHome: {
        bottom: 30
    },
    imgmvs: {
        width: 120,
        // borderRadius: 15,
        height: 180,
        margin: 0,
    },
    alertBackground: {
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 15,
    },
    alertBox: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: WHITE_COLOR_CODE,
    },
    ratebtn: {
        height: 40,
        width: "80%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: COMMONBTNCOLOR,
        justifyContent: "center",
    },
    rtetxt: {
        alignSelf: "center",
        color: WHITE_COLOR_CODE,
        fontSize: 22,
        fontFamily: FONT_FAMILY_REGULAR
    },
    inputtxtvwe: {
        borderWidth: 1,
        borderColor: COMMONBTNCOLOR,
        borderRadius: 10
    },
    rtevwe: { padding: 8 },
    closetosetouch: {
       justifyContent:'flex-end',
       alignItems:'flex-end',
       paddingTop:5
    },
    closeimg: { width: 30, height: 30 },
    txtvw: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 15
    },
    txt3: {
        color: "#616161",
        marginRight: 10,
        fontFamily: FONT_FAMILY_REGULAR
    },
    txtm: {
        marginRight: "2%",
        color: "#11bfbe",
        fontFamily: FONT_FAMILY_REGULAR
    },
    txtbg: {
        marginRight: "2%",
        color: "#616161",
        fontFamily: FONT_FAMILY_REGULAR
    },
    showntxt: {
        color: "#ffffff",
        fontFamily: FONT_FAMILY_BOLD,
        textAlign: "center",
        marginBottom: "3%",
        fontSize: 12
    },
})
export default styles;