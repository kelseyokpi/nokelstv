import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR, WHITE_COLOR_CODE, COMMONTHEMECOLOR } from '../../../utils/constant'
const styles = StyleSheet.create({
  ratingContainer: {
    width: "100%",
    overflow: "hidden"
  },
  overlay: {
    position: "absolute",
    height: "100%",
    alignSelf: "flex-end",
    opacity: 0.6,
    backgroundColor: "white",
    zIndex: 1
  },
  startContainer: {
    alignSelf: "flex-start",
    overflow: "hidden",
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a'
  },
  header: {
    flex: 0.6,
    flexDirection: "row"
  },
  hdrimg: {
    marginLeft: '2%',
    alignSelf: "center",
    marginRight: "3%"
  },
  hdrtxt: {
    color: WHITE_COLOR_CODE,
    fontSize: 20,
    alignSelf: "center",
    fontFamily: FONT_FAMILY_REGULAR
  },
  body: {
    flex: 5.4,
  },
  bdymnimg: {
    alignSelf: "center",
    borderRadius: 15,
    width: "95%",height:'35%',
  },
  locationimg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  mntxtvw: {
    marginTop: "1%",
    marginBottom: "1%"
  },
  maintxt: {
    color: COMMONTHEMECOLOR,
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 20,
    textAlign: "left",
    marginLeft: "3%",
    marginTop: '2%',
    width: "92%"
  },
  lctntxt: {
    color: '#ffffff',
    fontSize: 15,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  bxcon: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "center"
  },
  smalltxt: {
    color: "#595959",
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: 13
  },
  paragraph: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: FONT_FAMILY_REGULAR,
    marginTop: "5%",
    textAlign: "left",
    marginLeft: "2%"
  },
  shareimg: {
    position: "absolute",
    bottom: 50,
    alignSelf: "flex-end"
  }
});
export default styles;