import React from 'react';
import { Text, View } from 'react-native';
import IntroTexto from './IntroTexto.js';
import DivAvatares from './DivAvatares.js';
import Cuestionario from './Cuestionario.js';


export default function PantallaCuestionario({navigation}) {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <View style={styles.header}>
        <IntroTexto/>
      </View>
      <br></br>
      <DivAvatares/>
      <br></br>
      <Text style={styles.porFavor}>Por favor, responda estas preguntas:</Text>
      <Cuestionario navigation={navigation}></Cuestionario>
    </View>
  );
}

const styles = {
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
};