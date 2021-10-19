import { StyleSheet } from 'react-native';
import {
    FONT_FAMILY_REGULAR, COMMONTXTCOLOR, COMMONBTNCOLOR
} from '../../../utils/constant'
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    hdrtxt: {
        marginRight: 15
    },
    logoimg: {
        marginTop: 20,
        marginLeft: 10,
    },
    hdrscdvw: {
        marginTop: 25,
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
    },
    PlayBtnView: {
        backgroundColor: COMMONBTNCOLOR,
        alignSelf: "center",
        width: '85%',
        height: 72,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PlayBtnViewTxt: {
        color: COMMONTXTCOLOR,
        fontSize: 22,
        fontFamily: FONT_FAMILY_REGULAR
    },
})
export default Styles;