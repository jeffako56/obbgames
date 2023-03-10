import React, { Component } from "react";
import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("screen").height;
const styles = {
  parentContainer : {
    flex:1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: 10,
    margin: 5,
    height: deviceHeight,
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    paddingTop: 32,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  list: {
    paddingVertical: 4,
    width: "100%",
  },
  text: {
    fontSize: 30,
  },
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
    borderRadius: 20,
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
    borderRadius: 20,
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
};

export default styles;
