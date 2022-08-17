import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import IntroTexto from './IntroTexto.js';
import DivAvatares from './DivAvatares.js';
import BackButton from './BackButton.js';
import Cuestionario from './Cuestionario.js';
import Dropdown from "./Dropdown.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";
import { fotosDePerfil } from '../img/cargarImg.js';

export default function PantallaEstado({navigation}) {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <Image style={{width:20,height:20}} source={fotosDePerfil["avatar"]}/>
      <Image style={{width:20,height:20}} source={fotosDePerfil["conan"]}/>
      <Cuestionario navigation={navigation}></Cuestionario>
      <StatusBar style="auto"/>
    </View>
  );
}

function CondDropdown(){
  const {dropdown} = useContext(PreguntasContext);
  return (
    <>{dropdown > -1 ? <Dropdown></Dropdown> : <></>}</>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "94%",
    maxHeight: "17%",
    justifyContent: "space-between",
    margin: "3%",
    marginTop: "6%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  porFavor: {
    marginStart:"3%"
  }
});