import { StyleSheet,Platform } from 'react-native';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE, FONT_FAMILY_BOLD } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgvwe: {
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 3,
        marginTop: 3
    },
    mainimgvwe: {
        width: 170,
        height: 150,
        borderRadius: 8,marginLeft:10,
    },
    titletxt: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        textAlign: 'center',
        color: WHITE_COLOR_CODE,
        marginTop: 5,
        marginBottom: 5
    },
    mainvwe:{
        flex: 1
    },
    srchtxtinptvwe:{ flex: 0.9 },
    hdgtxt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: "2%",
        marginBottom: "0.5%"
    },
    headings: {
        marginLeft: 5,
        color: "#ffffff",
        fontSize: 16,
        fontFamily: FONT_FAMILY_BOLD,
    },
    hdgtxt2: {
        fontSize: 16,
        color: '#707070',
        marginRight: 5,
        fontFamily: FONT_FAMILY_REGULAR
    },
    imgmvs: {
        width: 185,
        // borderRadius: 15,
        height: 200,
        margin: 0,
    },
    headbckvwe:{
        flex:1,flexDirection:'row',
        padding:Platform.OS === 'ios' ? 15 : 0,
        paddingLeft:Platform.OS === 'ios' ? 5 : 10,
        paddingTop:Platform.OS === 'ios' ? '8%' : '8%' ,
    }
})
export default styles;