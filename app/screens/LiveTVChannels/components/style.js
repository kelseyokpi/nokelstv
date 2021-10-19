import { StyleSheet } from 'react-native';
import { COMMON_BACKGROUND_COLOR, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COMMON_BACKGROUND_COLOR
    },
    header: {
        flex: 0.6,
        marginTop: 5,
        flexDirection: "row"
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
    hdrinrvw: {
        flex: 1.5, flexDirection: "row",
        justifyContent: "space-evenly"
    },
    body: {
        flex: 5.4,
        justifyContent: "center",
        alignItems: "center"
    },
    imgfltlst: {
        width: 50,
        height: 50,
        opacity: 0.3,
        color: '#EEE'
    },
    title: {
        color: WHITE_COLOR_CODE,
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
        height: 40,
        width: 80
    },
    imgvw: {
        padding: 20,
        backgroundColor: "#363636",
        borderRadius: 50,
        margin: 5
    }
})
export default styles;