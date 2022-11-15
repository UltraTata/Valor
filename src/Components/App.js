import {React, useContext} from 'react';
import { View, Dimensions } from 'react-native';
import LoadingScreen from "./LoadingScreen.js";
import PantallaEstado from "./PantallaEstado.js";
import PantallaElegirPersonaje from './PantallaElegirPersonaje.js';
import { TalkContext, TalkProvider } from '../Context/TalkContext.js';

export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const globalViewStyle = {
    flex:1,
    alignItems: "center",
    justifyContent:"start"
  }
  return (
    <TalkProvider>
      <View style={globalViewStyle}>
        <View style={{width: windowWidth > windowHeight/2 ? windowHeight/2 : undefined}}>
          <Screen/>
        </View>
      </View>
    </TalkProvider>
  );
}

function Screen(){
  const {screen} = useContext(TalkContext);
  switch(screen){
    case "Estado":
      return (<PantallaEstado/>);
    case "Elegir personaje":
      return (<PantallaElegirPersonaje/>);
    default:
      return (<LoadingScreen/>);
  }
}