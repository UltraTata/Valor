import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroTexto from './IntroTexto.js';
import DivAvatares from './DivAvatares';
import BackButton from './BackButton';


export default function App() {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <BackButton></BackButton>
      <IntroTexto></IntroTexto>
      <br></br>
      <DivAvatares></DivAvatares>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'right',
    width: "100%",
    height: "100%",
    flexDirection:'row'
  },
});