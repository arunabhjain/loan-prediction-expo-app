import React from 'react';
import { StyleSheet, View, Text, Modal, Pressable } from 'react-native';

function ModalComponent(props) {
  return (
      <Modal animationType="slide" transparent={true} visible={props.modalVisible}
              onRequestClose={() => {props.setModalVisible(!props.modalVisible);}}
            >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{props.modalText}</Text>
            <Pressable style={[styles.button, styles.buttonClose]}
              onPress={() => {props.setModalVisible(!props.modalVisible)}}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
    marginTop: 30,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#14bf98",
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default ModalComponent