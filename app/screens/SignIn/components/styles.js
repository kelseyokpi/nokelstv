import { StyleSheet, Dimensions,Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, COMMONTXTCOLOR, COMMONBTNCOLOR, TEXTINPTCOLOR } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hdrtccon: {
        alignItems: "flex-end",
        top: '4%',
        justifyContent: "flex-end",
        padding:15,
        width:120, 
        alignSelf:"flex-end"
    },
    hdrtxt: {
        color: COMMONTXTCOLOR,
        fontSize: 17,
        fontFamily: FONT_FAMILY_BOLD,
        marginRight: 15,
        marginTop:Platform.OS === 'ios' ? 10 : 0
    },
    body: {
        flex: 6,
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
        padding:Platform.OS === 'ios' ? '10%' : 15,
        marginBottom: 2
    },
    ndhlptxt: {
        fontSize: 15,
        textAlign: "center",
        color: COMMONTXTCOLOR,
        fontFamily: FONT_FAMILY_BOLD
    },
    lsttxt: {
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
        textAlign: "center",
        color: COMMONTXTCOLOR
    },
    footer: {
        justifyContent: "flex-end",
        height:Platform.OS === 'ios'? 100 : 60,
        width: "100%",
        // backgroundColor:'red'
    },
    logview: {
        padding: "4%",
        paddingRight: 0,
        paddingLeft: 0
    },
    hdion: {
        position: 'absolute',
        zIndex: 1,
        right: 0,
        marginTop: 25,
        marginRight: 20
    },
    hideiconimg: {
        width: 29,
        height: 29
    }
})
export default styles;