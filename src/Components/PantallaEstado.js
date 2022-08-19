import React from 'react';
import { Text, View, Image } from 'react-native';
import Cuestionario from './Cuestionario.js';
import {PreguntasContext} from "../Context/PreguntasContext.js";
import { fotosDePerfil } from '../img/cargarImg.js';
import SvgButton from './SvgButton.js';

export default function PantallaEstado(params) {
  return (
    <View accessibilityRole="text" style={styles.container}>
      <Image style={styles.img("50%")} source={fotosDePerfil["logo"]}/>
      <View style={styles.littleDiv}>
        <Image style={styles.img("75%")} source={fotosDePerfil["conan"]}/>
        <SvgButton size="25%" margin="3%" onClick={() => params.navigation.navigate("Elegir personaje")}>
          M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z
        </SvgButton>
      </View>
      <Cuestionario navigation={navigation}></Cuestionario>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  littleDiv: {
    width: "50%",
    margin: "3%",
    justifyContent: "center",
    flexDirection: "row"
  },
  img: (size) => {return {
    width: size,
    aspectRatio: 1,
    margin: "3%"
  }}
};