import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_THIN, FONT_FAMILY_BOLD } from '../../../utils/constant'
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.5,
        backgroundColor: "#1a1a1a",
        flexDirection: "row",
        paddingTop: 25,
        flexGrow: 0.3
    },
    hdrimg: {
        marginLeft: "1%",
        marginTop: 5
    },
    hdrlogo: {
        marginLeft: "2%",
        width: 30,
        height: 30
    },
    body: {
        flex: 5.5,
        backgroundColor: "#1a1a1a",
        padding: 0,
        flexGrow: 5.7
    },
    mainimg: {
        height: 200,
        width: "100%",
        marginTop: "2%"
    },
    txtvw: {
        flexDirection: "row",
        justifyContent: "center",
        margin: 15
    },
    txt3: {
        color: "#616161",
        marginRight: 10,
        fontFamily: FONT_FAMILY_REGULAR
    },
    txtm: {
        marginRight: "2%",
        color: "#11bfbe",
        fontFamily: FONT_FAMILY_REGULAR
    },
    txtbg: {
        marginRight: "2%",
        backgroundColor: "#232323",
        color: "#616161",
        fontFamily: FONT_FAMILY_REGULAR
    },
    showntxt: {
        color: "#ffffff",
        fontFamily: FONT_FAMILY_BOLD,
        textAlign: "center",
        marginBottom: "3%",
        fontSize: 12
    },
    plybtn: {
        flexDirection: "row",
        height: 60,
        width: "90%",
        backgroundColor: "#11bfbe",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 12,
        margin: 5
    },
    plyimgbtn: {
        margin: 5
    },
    plybtntxt: {
        margin: 5,
        color: "#ffffff",
        fontFamily: FONT_FAMILY_BOLD,
        fontSize: 20
    },
    dwldbtn: {
        flexDirection: "row",
        height: 60,
        width: "90%",
        backgroundColor: "#373737",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 12,
        margin: 5
    },
    txtvwp: {
        flexDirection: "row"
    },
    whtrgltxt: {
        color: "#b7b6b6",
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 11,
        textAlign: "left",
        margin: 5,
        paddingLeft: '4%',
        paddingRight: 0
    },
    txtans: {
        color: "#6d6d6d",
        fontFamily: FONT_FAMILY_REGULAR,
        margin: 5,
        marginLeft: 0,
        fontSize: 12,
        textAlign: "left",
    },
    headingbtn: {
        flexDirection: "row",
        margin: 5
    },
    hdg: {
        color: "#ffffff",
        marginRight: 10,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13,
    },
    headingbtninr: {
        flexDirection: "row",
        justifyContent: "flex-end",
        flex: 2.5,
        borderTopWidth: 1,
        borderColor: "#2e2e2e"
    },
    picker: {
        height: 50, width: 150
    },
    pickerItem: {
    },
    ssn: {
        color: "#11bfbe",
        marginRight: 2,
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 13
    },
    ssnimg: {
        resizeMode: "cover",
        marginTop: 8
    },
    imgvwfltlst: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    txtvwfltlst: {
        flex: 3,
        marginTop: "4%",
        justifyContent: "flex-start",
    },
    dwldimgfltlst: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imgfltlst: {
        height: 60,
        width: 100,
        borderRadius: 5
    },
    dwldfltlst: {
        // height: 20,
        // width: 20,
    },
    txtfltlst1: {
        color: "#ffffff",
        textAlign: "left",
        fontFamily: FONT_FAMILY_REGULAR
    },
    txtfltlst2: {
        color: "#787878",
        textAlign: "left",
        fontFamily: FONT_FAMILY_REGULAR
    }
})
export default styles;
