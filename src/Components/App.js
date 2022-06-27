import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroTexto from './IntroTexto.js';
import DivAvatares from './DivAvatares.js';
import BackButton from './BackButton.js';
import Cuestionario from './Cuestionario.js';


export default function App() {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <View style={styles.header}>
        <BackButton></BackButton>
        <IntroTexto></IntroTexto>
      </View>
      <br></br>
      <DivAvatares></DivAvatares>
      <br></br>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Cuestionario></Cuestionario>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    flexDirection: "row",
    maxHeight:"17%",
    marginBottom:"3%",
    justifyContent: "space-between"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  porFavor: {
    marginStart:"3%"
  }
});