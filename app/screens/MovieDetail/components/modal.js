import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, TouchableWithoutFeedback } from "react-native";
import { COMMONBTNCOLOR, COMMONTHEMECOLOR, FONT_FAMILY_REGULAR, WHITE_COLOR_CODE, FONT_FAMILY_BOLD } from '../../../utils/constant';
const windowWidth = Dimensions.get('window').width;

const ModalView = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={() => props.setShowModal(false)}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.showModal}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          props.setShowModal(!props.showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You have not login.</Text>
            <Text style={styles.modalText1}>{props.msg}</Text>
            <View 
                style={{
                    flexDirection:"row", 
                    width: windowWidth/1.5,
                    justifyContent:"center"
                    }}>
                <View style={{margin: 10}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.setShowModal(!props.showModal)}
                >
                    <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                </View>
                <View style={{margin: 10}}>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => props.onPressLogin()}
                >
                    <Text style={styles.textStyle}>Login</Text>
                </Pressable>
                </View>
            </View>
        </View>
            
          </View>
          
        
      </Modal>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: COMMONTHEMECOLOR,
  },
  textStyle: {
    color: "white",
    fontFamily: FONT_FAMILY_BOLD,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    fontSize:20,
    textAlign: "center",
    color: COMMONTHEMECOLOR,
    fontFamily: FONT_FAMILY_BOLD
  },
  modalText1: {
    marginBottom: 17,
    textAlign: "center",
    fontFamily: FONT_FAMILY_REGULAR,
    lineHeight:20
  }
});

export default ModalView;