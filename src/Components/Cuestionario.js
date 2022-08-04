import { StatusBar } from 'expo-status-bar';
import {React, useContext} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Pregunta from "./Pregunta.js";
import Dropdown from "./Dropdown.js";
import cuestionarioJSON from "../JSON/Cuestionario.json";
import { PreguntasContext } from '../Context/PreguntasContext.js';

export default function Cuestionario() {
    const {respuestas, dropdown} = useContext(PreguntasContext);
    return (
        <View style={styles.div}>
            {
                cuestionarioJSON.map(
                    (pregunta,i) => <Pregunta 
                        i={i}></Pregunta>
                )
            }
            <View style={{alignItems: "center"}}>
                <Text style={styles.button}>¡Listo!</Text>
            </View>
            {
                dropdown > -1 ? <Dropdown></Dropdown> : <></>
            }
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
        margin: "3%",
        padding: "0.5%",
        width: "30%"
    }
});