import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Pregunta from "./Pregunta.js";

let preguntas = [
    {pregunta: "¿Como se define políticamente?",
        respuestas: ["AuthLeft", "Auth", "AuthRight", "Left", "Center", "Right", "LibLeft", "Lib", "LibRight"]},
    {pregunta: "¿Introvertido o extrovertido?",
        respuestas: ["Introvertido", "Metzovertido", "Extrovertido"]},
]

export default function Cuestionario() {
    return (
        <View style={styles.div}>
            {
                preguntas.map(
                    (pregunta) => <Pregunta pregunta={pregunta}></Pregunta>
                )
            }
            <View style={{alignItems: "center"}}>
                <Text style={styles.button}>¡Listo!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        marginStart: "3%",
        marginTop: "1%",
        paddingTop: "1%",
        paddingBottom: "1%"
    },
    button: {
        backgroundColor: "#fdcfdc",
        borderRadius: 8,
        textAlign: "center",
        display: "inline",
        fontSize: "20px",
        fontWeight: "bold",
        padding: "0.5%",
        width: "30%"
    }
});