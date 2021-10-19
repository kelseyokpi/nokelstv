import { StyleSheet } from 'react-native';
import { COMMON_BACKGROUND_COLOR, WHITE_COLOR_CODE, FONT_FAMILY_REGULAR ,COMMONTHEMECOLOR} from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COMMON_BACKGROUND_COLOR
    },
    header: {
        flex: 0.7,
        paddingTop: 15,
        flexDirection: "row",
        paddingLeft: 15, paddingRight: 15
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
    body: {
        flex: 5.4,
        padding: 5,
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
        width: '85%',
        marginTop:10
    },
    imgmvs: {
        //width: 160,
        borderRadius: 5,
        height: 180,
        margin: 2,
    },
})
export default styles;