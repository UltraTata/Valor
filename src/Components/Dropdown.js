import { StatusBar } from 'expo-status-bar';
import {React, useContext, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { PreguntasContext } from '../Context/PreguntasContext';
import cuestionarioJSON from "../JSON/Cuestionario.json";

function R(props){
    const changeRSp = function(){
        props.f(props.i);
    }
    if(props.i == props.s){
        return (
            <Text onClick={changeRSp} style={styles.selected}>{props.r}</Text>
        );
    }else{
        return (
            <Text onClick={changeRSp} style={styles.other}>{props.r}</Text>
        );
    }
}

export default function Dropdown(props){
    const {dropdown, respuestas, modificarRespuesta, displayOrHide} = useContext(PreguntasContext);
    const changeR = function(v){
        modificarRespuesta(dropdown,v);
        displayOrHide(-1);
    }
    return (
        <View style={styles.dropdown}>
            {
                cuestionarioJSON[dropdown].respuestas.map(
                    (respuesta,iter) =>
                        <R
                            i = {iter}
                            s = {respuestas[dropdown]}
                            r = {respuesta}
                            f = {changeR}
                        ></R>
                )
            }
        </View>
    );
}
const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "steelblue",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "100%"
    },
    selected: {
        fontWeight: "bold",
        margin: "3%"
    },
    other: {
        margin: "3%"
    }
})