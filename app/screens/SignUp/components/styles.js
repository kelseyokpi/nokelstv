import { Platform } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import {
    FONT_FAMILY_REGULAR, COMMONTXTCOLOR,
    COMMONBTNCOLOR, TEXTINPTCOLOR,COMMON_BACKGROUND_COLOR,
    FONT_FAMILY_BOLD, WHITE_COLOR_CODE,BLACK_COLOR_CODE
} from '../../../utils/constant'
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
        // marginBottom: 10,
        marginTop:Platform.OS === 'ios' ? '7%' : 10,
        marginBottom:Platform.OS === 'ios' ? 5 : 1,
        alignSelf: "flex-start",
        marginLeft: "7%"
    },
    HeadingTxtStyle: {
        color: COMMONTXTCOLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 30
    },
    body: {
        flex: 5.5
    },
    footer: {
        height: 60, width: '100%',
        alignSelf: "center",
        justifyContent: "flex-end"
        ,
        bottom:'2%'
    },


    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalView: {
        backgroundColor: WHITE_COLOR_CODE,
        borderRadius: 10,
        borderWidth: 0.5,

        width: '90%',
        height: '95%',
    },
    TouchableFlse: {
        position: 'absolute',
        flex: 1,
        right: 0,
        paddingRight: 15,
        // top: 10,
        top: 10,
        zIndex: 1
    },
    SendImgeSTyle: {
        position: 'absolute',
        right: 0,
        top: 10,
        right: -10
    },
    TxtInptStyle: {
        borderBottomWidth: 0.5,
        borderColor: BLACK_COLOR_CODE,
        fontSize: 17,
        paddingLeft: 15,
        paddingTop: 10,
        height: 55,
        color: COMMON_BACKGROUND_COLOR,
        // backgroundColor:'red'
    },
    MainCntrySlctTouchble: {
        flex: 5,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: BLACK_COLOR_CODE
    },
    CountryText: {
        fontSize: 18,
        margin: 5,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COMMON_BACKGROUND_COLOR
    },
    MainTextViewCountry: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    RegionTextMain: {
        fontSize: 17,
        margin: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        color: COMMON_BACKGROUND_COLOR,
        marginTop: 19,
    },
})
export default styles;