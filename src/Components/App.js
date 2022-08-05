import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from "./Dropdown.js";
import {PreguntasContext, PreguntasProvider} from "../Context/PreguntasContext.js";
import { NativeRouter, Routes, Route, Link } from "react-router-native";
import PantallaCuestionario from './PantallaCuestionario.js';


export default function App() {
  return (
    <PreguntasProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" component={PantallaCuestionario} />
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