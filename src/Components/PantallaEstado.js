import {React, useContext} from 'react';
import { View, Image } from 'react-native';
import DivSucesos from './DivSucesos.js';
import DivDialogo from './DivDialogo.js';
import {TalkContext} from "../Context/TalkContext.js";
import { fotosDePerfil } from '../img/cargarImg.js';
import SvgButton from './SvgButton.js';

export default function PantallaEstado() {

  const context = useContext(TalkContext);
  const {setRoute} = useContext(RoutingContext);

  return (
    <View accessibilityRole="text" style={styles.container}>
      <Image style={styles.img("50%")} source={fotosDePerfil["logo"]}/>
      <View style={styles.littleDiv}>
        <Image style={styles.img("75%")} source={fotosDePerfil[context.personaje.img]}/>
        <SvgButton viewBox="-2 -2 20 20" size="25%" margin="3%" onClick={() => setRoute("Personaje")}>
          M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z
        </SvgButton>
      </View>
      <DivDialogo/>
      <DivSucesos/>
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