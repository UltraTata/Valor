import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroTexto from './IntroTexto.js';
import DivAvatares from './DivAvatares.js';
import BackButton from './BackButton.js';
import Cuestionario from './Cuestionario.js';
import Dropdown from "./Dropdown.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";


export default function PantallaEstado({navigation}) {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <View style={styles.header}>
        <BackButton></BackButton>
        <IntroTexto></IntroTexto>
      </View>
      <br></br>
      <DivAvatares></DivAvatares>
      <br></br>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
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