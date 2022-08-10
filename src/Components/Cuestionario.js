import { StatusBar } from 'expo-status-bar';
import {React, useContext, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Pregunta from "./Pregunta.js";
import Dropdown from "./Dropdown.js";
import cuestionarioJSON from "../JSON/Cuestionario.json";
import { PreguntasContext } from '../Context/PreguntasContext.js';
import {Navegate} from "react-router-native";

export default function Cuestionario() {
    const {respuestas, dropdown} = useContext(PreguntasContext);
    const {gone, setGone} = useState(false);
    const go = () => setGone(true);
    return (
        <View style={styles.div}>
            {
                cuestionarioJSON.map(
                    (pregunta,i) => <Pregunta 
                        i={i}></Pregunta>
                )
            }
            <View style={{alignItems: "center"}} onClick={go}>
                <Text style={styles.button}>¡Listo!</Text>
                {
                    gone ? <Navegate to="/estado" replace={true}/> : <></>
                }
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
        margin: "3%",
        padding: "0.5%",
        width: "30%"
    }
});