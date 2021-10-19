import { StyleSheet, Dimensions } from "react-native";
import { WHITE_COLOR_CODE, COMMON_BACKGROUND_COLOR, FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR,
    COMMONTHEMECOLOR } from '../../../utils/constant'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        backgroundColor: "#1a1a1a",
        justifyContent: "space-evenly",
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 40,
        paddingTop: "1.5%",
    },
    header: {
        flex: 0.8,
        flexDirection: "row",
        paddingLeft: 15, 
        paddingRight: 15
    },
    bottomButtons: {
    },
    bottomButtonsHome: {
        bottom: 30
    },
    MainFooterImg: {
    },
    imgfltlst: {
        height: windowHeight / 4,
        width: windowWidth / 1
    },
    watchView: {
        flex: 1,
        padding: 5,
        backgroundColor: COMMON_BACKGROUND_COLOR
    },
    wthtxt: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 20,
        color: WHITE_COLOR_CODE
    },
    tchVw: {
        // padding: 10,
        borderRadius: 5,
        margin: 5
    },
    hdrbkbtn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    hdrtxt: {
        color: WHITE_COLOR_CODE,
        fontSize: 21,
        fontFamily: FONT_FAMILY_REGULAR
    },
    SearchBarView: {
        backgroundColor: COMMONTHEMECOLOR,
        margin: 15,
        height: 45,
        borderRadius: 20,
        paddingLeft: 15
    },
    SeacrhingStyle:{
        fontFamily: FONT_FAMILY_REGULAR, 
        color: WHITE_COLOR_CODE,
         width: '85%' 
    }
})
export default styles;