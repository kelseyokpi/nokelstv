import { StyleSheet,Dimensions } from 'react-native';
import { FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, BLACK_COLOR_CODE } from '../../../utils/constant'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: 'row',
  },
  headertxt: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: FONT_FAMILY_BOLD
  },
  backBtn: {
    marginTop: '15%',
    aspectRatio: 1.5
  },
  profile: {
    marginTop: 20,
    flex: 2,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    marginBottom: 10,
  },
  firstvw: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 60,
  },
  frstinrvw: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
  },
  scdinrvw: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  stgbtntxt: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: FONT_FAMILY_BOLD
  },
  profilePic: {
    alignItems: 'center',
    position: 'absolute',
    marginTop: -50,
    alignSelf: 'center',
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  descriptionTxt: {
    fontSize: 25,
    fontFamily: FONT_FAMILY_REGULAR
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  settingBtn: {
    backgroundColor: '#11bfbe',
    paddingLeft: 42,
    paddingRight: 42,
    padding: 8,
    borderRadius: 10,
  },
  profileDetails: {
    flex: 4,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: '#efefef',
    marginTop: 10,
    height: 72,
    width: "85%",
    alignSelf: "center",
    borderRadius: 12,
    justifyContent: "flex-start",
    paddingLeft: 16,
  },
  mnbtncon: {
    width: '85%',
    alignSelf: "center",
    height: 60,
    marginTop: '3%',
    backgroundColor: '#11bfbe',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  cancelbtncon: {
    width: '85%',
    alignSelf: "center",
    height: 60,
    backgroundColor: '#11bfbe',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  textInput: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: 18,
    marginTop: 19,
    marginLeft: 4
  },
  confirmBtnSTyle: {
    height: 40,
    width: '50%',
    elevation: 4,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  nameclass: {
    fontSize: 16,
    color: BLACK_COLOR_CODE,
    justifyContent: "center",
    fontFamily: FONT_FAMILY_BOLD,
  }
});
export default styles;