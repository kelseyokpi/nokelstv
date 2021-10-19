import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '../../../utils/constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 2,
    },
    body: {
        flex: 4,
        backgroundColor: '#1a1a1a',
        padding: 10,
    },
    imgfltlst: {
        width: 100,
        borderRadius: 50,
        height: 100,
        margin: 2,
    },
    mainViewTXT: {
        flexDirection: 'row',
        marginTop: "5%",
        marginBottom: "2%"
    },
    imgfltlst2: {
        width: 100,
        borderRadius: 8,
        height: 150,
        margin: 2,
    },
    hdgtxt: {
        color: '#fff',
        flex: 5,
        fontSize: 16,
        fontFamily: FONT_FAMILY_REGULAR
    },
    pretxt: {
        color: '#11bfbe',
        flex: 1,
        fontSize: 14,
        fontFamily: FONT_FAMILY_BOLD
    },
    movienamerct: {
        color: "#b8b8b8",
        fontSize: 12.5,
        textAlign: "center",
        fontFamily: FONT_FAMILY_REGULAR
    },
    liveTxt: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: "10%",
        fontFamily: FONT_FAMILY_REGULAR
    }
})
export default styles;