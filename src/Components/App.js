import {React, useContext} from 'react';
import LoadingScreen from "./LoadingScreen.js";
import PantallaEstado from "./PantallaEstado.js";
import PantallaElegirPersonaje from './PantallaElegirPersonaje.js';
import { TalkContext, TalkProvider } from '../Context/TalkContext.js';

export default function App() {
  
  return (
    <TalkProvider>
      <Screen/>
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