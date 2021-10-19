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
        height:180,
        width: '98%',
        borderRadius:10,
        alignSelf:"center"
    },
    title: {
        color: WHITE_COLOR_CODE,
        fontSize: 15,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: "center",
    },
    imgvw: {
        margin: 5,
    
    }
})
export default styles;