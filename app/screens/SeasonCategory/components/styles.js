import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, GREY_COLOR_CODE, WHITE_COLOR_CODE } from '../../../utils/constant'
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
    mainvwe: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
    },
    descriptiontxtvwe: {
        paddingLeft: 10,
        padding: 5,
        paddingTop: '4%',
        flex:1,
    },
    pisodenmae: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: 14,
        width: '90%',
        lineHeight: 20,
        color: WHITE_COLOR_CODE
    },
    tme: {
        fontSize: 12,
        paddingTop: 4,
        width: '90%',
        fontFamily: FONT_FAMILY_REGULAR,
        color: GREY_COLOR_CODE,
    }
})
export default styles;