import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD, WHITE_COLOR_CODE, COMMONTXTCOLOR, COMMONBTNCOLOR, COMMONBLACKTXTCOLOR } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a'
    },
    header: {
        flexDirection: 'row',
        marginTop: 35,
        marginLeft: 15
    },
    HeaderImgStyle: {
        aspectRatio: 1.5
    },
    SubscptnView: {
        marginLeft: 20
    },
    SubscptnTxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        color: COMMONTXTCOLOR,
        fontSize: 20
    },
    CHoosePlanView: {
        marginTop: 30,
        alignSelf: "center"
    },
    CHoosePlanTxt: {
        fontSize: 29,
        color: COMMONTXTCOLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        textAlign: 'center'
    },
    DrownGradeView: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DrownGradeTxt: {
        color: COMMONBLACKTXTCOLOR,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 18
    },
    BoxesMainView: {
        marginTop: 30,
        marginRight: 20,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    MonthlyTxtView: {
        backgroundColor: COMMONBTNCOLOR,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 95,
        borderRadius: 7,
        marginLeft: 5,
        marginRight: 5
    },
    QualityMainView: {
        marginTop: 10,
        padding: 10
    },
    contTouch: {
        backgroundColor: COMMONBTNCOLOR,
        borderRadius: 12, height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        width: "85%", alignSelf: "center"
    },
    contTXT: {
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 19,
        color: COMMONTXTCOLOR
    },
    PlanAdvantageTxt: {
        flexDirection: 'row',
        paddingRight: 20
    },
    planAdvntgeText: {
        fontFamily: FONT_FAMILY_REGULAR,
        paddingLeft: 10,
        paddingBottom: 10,
        color: WHITE_COLOR_CODE,
        fontSize: 17,
        lineHeight: 24
    },
    confirmBtnSTyle:{
        height: 40,
        width: '50%',
        elevation: 4,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
      },
      couponvwebx:{
        height: 40, borderColor: 'gray',
        borderWidth: 1,
        borderWidth:1,
        width:210,
        borderColor:COMMONBTNCOLOR,
        borderRadius:5,
        marginLeft:15,
        color:WHITE_COLOR_CODE
      },
      coupontouchvwe:{
        height: 40, borderColor: 'gray',
        borderWidth: 1,
        borderWidth: 1,
        width: 80,
        borderColor: COMMONBTNCOLOR,
        borderRadius: 5,
        marginLeft: 15,
        color: WHITE_COLOR_CODE,
        backgroundColor: COMMONBTNCOLOR,
        justifyContent: 'center',
        alignItems: 'center'
      }
})
export default styles;