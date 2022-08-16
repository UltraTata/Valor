import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dropdown from "./Dropdown.js";
import PantallaCuestionario from "./PantallaCuestionario.js";
import PantallaEstado from "./PantallaEstado.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";


export default function App() {
  return (
    <PreguntasProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cuestionario">
          <Stack.Screen name="Cuestionario" component={PantallaCuestionario} />
          <Stack.Screen name="Estado" component={PantallaEstado} />
        </Stack.Navigator>
      </NavigationContainer>
      <CondDropdown></CondDropdown>
    </PreguntasProvider>
  );
}

function CondDropdown(){
  const {dropdown} = useContext(PreguntasContext);
  return (
    <>{dropdown > -1 ? <Dropdown></Dropdown> : <></>}</>
  );
}