import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from "./Dropdown.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";
import { NativeRouter, Routes, Route } from "react-router-native";
import PantallaCuestionario from './PantallaCuestionario.js';
import PantallaDeEstado from './PantallaDeEstado.js';


export default function App() {
  return (
    <PreguntasProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<PantallaCuestionario/>} />
          <Route path="/estado" element={<PantallaDeEstado/>} />
        </Routes>
      </NativeRouter>
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