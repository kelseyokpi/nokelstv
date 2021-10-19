import { StyleSheet } from 'react-native';
import { COMMON_BACKGROUND_COLOR, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COMMON_BACKGROUND_COLOR
    },
    header: {
        flex: 0.6,
        flexDirection: "row",
    },
    hdrbkbtn: {
        alignSelf: "center"
    },
    hdrtxt: {
        marginLeft: "5%",
        color: WHITE_COLOR_CODE,
        fontSize: 21,
        alignSelf: "center",
        fontFamily: FONT_FAMILY_REGULAR
    },
    body: {
        flex: 5.4,
        width: "100%"
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
    MainFooterImg: {
    },
    bckbtn: {
        flex: 4.5,
        flexDirection: "row"
    }
})
export default styles;