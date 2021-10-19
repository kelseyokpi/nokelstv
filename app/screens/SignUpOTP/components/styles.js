import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONT_FAMILY_REGULAR, COMMONTXTCOLOR, COMMONBTNCOLOR,
    WHITE_COLOR_CODE, TEXTINPTCOLOR, FONT_FAMILY_BOLD, COMMONTHEMECOLOR } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a'
    },
    header: {
        flex: 0.5,
        marginLeft: 15,
        justifyContent: "flex-end"
    },
    txtipt: {
        marginTop: 13,
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
        marginTop: 19,
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
        marginBottom:20
    },
    btntxt: {
        alignSelf: "center",
        color: COMMONTXTCOLOR,
        fontSize: 22,
        fontFamily: FONT_FAMILY_BOLD
    },
    lsttxt: {
        fontSize: 15,
        fontFamily: FONT_FAMILY_BOLD,
        textAlign: "center",
        color: COMMONTXTCOLOR
    },
    HeadingTxt: {
        marginBottom: 10,
        alignSelf: "flex-start",
        marginLeft: "7%"
    },
    HeadingTxtStyle: {
        color: COMMONTXTCOLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 30
    },
    body: {
        flex: 5.5,
        // justifyContent:"center",
        // alignItems:"center"
    },
    footer: {
        height: 60, width: '100%',
        alignSelf: "center",
        justifyContent: "flex-end"
    },
    retouch: {
        // alignSelf: "flex-end",
        // marginRight: "8%",
        marginTop: "2%",
        flexDirection:'row',alignSelf:'center'
    },
    reTXT: {
        color: COMMONTHEMECOLOR ,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize:15,
        marginLeft:10
    }
})
export default styles;