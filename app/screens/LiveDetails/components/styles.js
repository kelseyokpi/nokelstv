import { StyleSheet } from 'react-native';
import {FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, WHITE_COLOR_CODE } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 4,
        backgroundColor: "#111111"
    },
    signincon: {
        height: 36,
        width: "35%",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: 10,
        justifyContent: "center",
        borderWidth: 2,
        backgroundColor: '#ef3f3f',
        borderColor: '#ef3f3f',
    },
    btntxt: {
        alignSelf: "center",
        color: '#fff',
        fontFamily: FONT_FAMILY_REGULAR
    },
    maintxt: {
        fontSize: 13,
        fontWeight: '700',
        margin: 2,
        marginLeft: 23,
        color: '#fff'
    },
    bottomButtonsHome: {
        bottom: 30
    },
    MainFooterImg: {
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
        color: '#0a0a0a',
    },
    imgfltlst: {
        width: 80,
        borderRadius: 40,
        height: 80,
    },
    mainViewTXT: {
        flexDirection: 'row',
        marginTop: 10
    },
    hdgtxt: {
        color: '#fff',
        flex: 5,
        fontSize: 15,
        marginLeft: 5,
    },
    pretxt: {
        color: '#11bfbe',
        flex: 1,
        fontSize: 13,
        fontWeight: 'bold'
    },
    title: {
        color: '#ffffff',
        fontSize: 15,
        height: 120,
        marginLeft: 15,
        padding: 8,
    },
    haqTXT: {
        color: WHITE_COLOR_CODE,
        textAlign: "left",
        fontSize: 17,
        fontFamily: FONT_FAMILY_BOLD
    },
    haqmainview: {
        backgroundColor: "#1a1a1a",
        justifyContent: "center",
        alignContent: "center"
    },
    View: {
        flexDirection: "row",
        backgroundColor: "#1a1a1a",
        width: "100%", height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    txtView: {
        color: '#808080',
        textAlign: "left",
        fontFamily: FONT_FAMILY_REGULAR
    },
    informationIconIMG:{
        flex: 1,
         justifyContent: "center",
          alignItems: "center" 
    },
    TodayTXT:{
        fontSize: 16,
         textAlign: 'center',
          color: '#ffffff',
           fontFamily: FONT_FAMILY_REGULAR 
    },
    channelView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'7%',
    },
    channeltxt:{
        color:'#11bfbe',
        fontFamily:FONT_FAMILY_BOLD,
        marginLeft:15
    }
   })
export default styles;