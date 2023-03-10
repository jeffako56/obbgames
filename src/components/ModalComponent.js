import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { Image, Modal, View } from 'react-native';

function ModalComponent({modalVisible, setModalVisible, description}) {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
  >
    <View style={internalStyle.centeredView}>
      <View style={internalStyle.modalView}>
        <Image
          style={internalStyle.image}
          source={require('../../assets/warning.png')}
        />
        <Text style={internalStyle.modalText}>{description}</Text>
        <Pressable
          style={[internalStyle.button, internalStyle.buttonClose]}
          onPress={() => {setModalVisible(!modalVisible) ,console.log("nope")} }
        >
          <Text style={internalStyle.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  )
}

const internalStyle = StyleSheet.create({
  image: {
    display: "flex",
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderWidth: 0.2,
    borderColor: "black",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ModalComponent