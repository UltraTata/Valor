import {React, useContext} from 'react';
import LoadingScreen from "./LoadingScreen.js";
import PantallaEstado from "./PantallaEstado.js";
import {RoutingContext, RoutingProvider} from "../Context/RoutingContext.js";
import PantallaElegirPersonaje from './PantallaElegirPersonaje.js';
import { TalkProvider } from '../Context/TalkContext.js';

export default function App() {
  return (
    <RoutingProvider>
      <TalkProvider>
        <RenderRoute/>
      </TalkProvider>
    </RoutingProvider>
  );
}
function RenderRoute(){
  const {route} = useContext(RoutingContext);
  switch(route) {
    case "Estado":
      return (<PantallaEstado/>);
    case "Personaje":
      return (<PantallaElegirPersonaje/>);
    default:
      return (<LoadingScreen/>);
  }
}