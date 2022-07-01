import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

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
    const changeR = function(r){
        props.pregunta.seleccion = r;
        props.f(-1);
    }
    return (
        <View style={styles.dropdown}>
            {
                props.pregunta.respuestas.map(
                    (respuesta) =>
                        <R
                            i = {props.pregunta.respuestas.indexOf(respuesta)}
                            s = {props.pregunta.seleccion}
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