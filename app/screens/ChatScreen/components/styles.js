import { StyleSheet } from 'react-native';
import { FONT_FAMILY_BOLD } from '../../../utils/constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    headerView: {
        marginTop: '5%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        flex: 0.5
    },
    backBtn: {
        marginTop: 10,
    },
    dp: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 100,
        marginHorizontal: 12
    },
    headertxt: {
        color: '#FFF',
        fontSize: 20,
        marginTop: 10,
        fontFamily: FONT_FAMILY_BOLD
    },
    body: {
        flex: 3.5
    },
    footer: {
        flex: 2,
        backgroundColor: '#000',
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    chatfooter: {
        backgroundColor: '#ffffff',
        width: '90%',
        alignSelf: "center",
        borderRadius: 15
    },
    cftrvw: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "center",
        marginBottom: 5
    }
});
export default styles;