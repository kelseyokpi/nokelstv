import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, COMMONTXTCOLOR, COMMONBTNCOLOR, TEXTINPTCOLOR ,WHITE_COLOR_CODE} from '../../../utils/constant'
const styles = StyleSheet.create({
    bgdimg: {
        flex: 1
    },
    container: {
        flex: 1
    },
    header: {
        flex: 0.6,
        justifyContent: 'flex-end',
        marginTop: 0
    },
    hdrtccon: {
        alignItems: "flex-end",
        bottom: 0
    },
    hdrtxt: {
        color: COMMONTXTCOLOR,
        fontSize: 17,
        fontFamily: FONT_FAMILY_BOLD,
        marginRight: 15
    },
    body: {
        flex: 5.4
    },
    frgtpc: {
        textAlign: "left",
        marginLeft: "8%",
        fontFamily: FONT_FAMILY_REGULAR,
        color: WHITE_COLOR_CODE,
        fontSize: 18
    },
    logoimg: {
        alignSelf: "center",
        marginTop: height / 16,
    },
    txtipt: {
        marginTop: 10,
        height: 72,
        width: "85%",
        backgroundColor: TEXTINPTCOLOR,
        alignSelf: "center",
        borderRadius: 12,
        justifyContent: "flex-start",
        paddingLeft: 16
    },
    txtipttxt: {
        color: COMMONTXTCOLOR,
        fontSize: 18,
        fontFamily: FONT_FAMILY_BOLD,
        marginTop: 22,
        marginLeft: 4
    },
    signincon: {
        height: 72,
        width: "85%",
        alignSelf: "center",
        borderRadius: 10,
        backgroundColor: COMMONBTNCOLOR,
        marginTop: 24,
        justifyContent: "center",
    },
    btntxt: {
        alignSelf: "center",
        color: COMMONTXTCOLOR,
        fontSize: 22,
        fontFamily: FONT_FAMILY_BOLD
    },
    ndhlp: {
        marginTop: 15,
        marginBottom: 2
    },
    ndhlptxt: {
        fontSize: 15,
        textAlign: "center",
        color: COMMONTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD
    },
    lsttxtcon: {
    },
    lsttxt: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
        textAlign: "center",
        color: COMMONTXTCOLOR
    },
    footer: {
        justifyContent: "flex-end",
        height: 60,
        width: "100%"
        // position:"absolute",
        // bottom:22,alignSelf:"center"
    }
})
export default styles;