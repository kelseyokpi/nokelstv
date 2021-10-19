import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, FONT_FAMILY_BOLD } from '../../../utils/constant';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1a1a1a"
    },
    header: {
        flexDirection: "row",
        paddingTop: "5%",
        position:"absolute",top:25
    },
    backbtnvw: {
        marginRight:'5%',
        marginLeft: '5%',
        justifyContent: "center"
    },
    backbtn: {
    },
    logoimg: {
    },
    dwnldlogo: {
        height: 200,
        width: 155,
        alignSelf:"center",
    },
    dwnldlogovw:{
        justifyContent:"flex-end",
        alignItems:"center",
        flexGrow:0.8
    },
    txt:{
        color:"#ffffff",
        textAlign:"center",
        fontSize:20,
        fontFamily:FONT_FAMILY_BOLD
        },
    btncon:{
        height:72,
        width:'85%',
        backgroundColor:"#ffffff",
        alignSelf:"center",
        borderRadius:10,
        justifyContent:"center",
        marginBottom:'22%'
    },
    btntxt:{
        textAlign:"center",
        fontFamily:FONT_FAMILY_REGULAR,
        fontSize:17
    },
})
export default styles; 