import {React, useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dropdown from "./Dropdown.js";
import LoadingScreen from "./LoadingScreen.js";
import PantallaEstado from "./PantallaEstado.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";
import PantallaElegirPersonaje from './PantallaElegirPersonaje.js';
import { TalkProvider } from '../Context/TalkContext.js';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <PreguntasProvider>
      <TalkProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading">
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Estado" component={PantallaEstado} />
            <Stack.Screen name="Elegir personaje" component={PantallaElegirPersonaje} />
          </Stack.Navigator>
        </NavigationContainer>
        <CondDropdown/>
      </TalkProvider>
    </PreguntasProvider>
  );
}

function CondDropdown(){
  const {dropdown} = useContext(PreguntasContext);
  return (
    <>{dropdown > -1 ? <Dropdown></Dropdown> : <></>}</>
  );
}