import { StatusBar } from 'expo-status-bar';
import {React, useContext, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { PreguntasContext } from '../Context/PreguntasContext';
import cuestionarioJSON from "../JSON/Cuestionario.json";
import Svg, {Path} from 'react-native-svg';

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
    const closeR = function(){
        displayOrHide(-1);
    }
    const eraseR = function(){
        modificarRespuesta(dropdown,-1);
        displayOrHide(-1);
    }
    return (
        <View style={styles.dropdown}>
            <View style={styles.preSvg}>
                <Svg onClick={eraseR} viewBox="0 0 16 16" style={styles.svg} fill="black">
                        <Path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></Path>
                        <Path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></Path>
                </Svg>
                <Svg onClick={closeR} viewBox="0 0 16 16" style={styles.svg} fill="black">
                    <Path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></Path>
                </Svg>
            </View>
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
        position: "sticky",
        bottom: 0,
        right: 0,
        width: "100%",
        paddingBottom: "3%"
    },
    selected: {
        fontWeight: "bold",
        margin: "1%"
    },
    other: {
        margin: "1%"
    },
    preSvg: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    svg: {
        fill: "black",
        height: 16,
        aspectRatio: 1,
        selfAlign: "end",
        margin: "1%"
    }
})