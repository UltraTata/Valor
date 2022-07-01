import { StatusBar } from 'expo-status-bar';
import {React, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Pregunta from "./Pregunta.js";
import Dropdown from "./Dropdown.js";
import preguntas from "../JSON/Cuestionario.json";

export default function Cuestionario() {
    const [dropdown, setDropdown] = useState(-1);
    const displayOrHide = function(i){
        if(dropdown == -1){
            setDropdown(i);
        }else{
            setDropdown(-1);
        }
    }
    return (
        <View style={styles.div}>
            {
                preguntas.map(
                    (pregunta) => <Pregunta 
                        pregunta={pregunta} 
                        index={preguntas.indexOf(pregunta)} 
                        f={displayOrHide}></Pregunta>
                )
            }
            <View style={{alignItems: "center"}}>
                <Text style={styles.button}>¡Listo!</Text>
            </View>
            {
                dropdown > -1 ? <Dropdown pregunta={preguntas[dropdown]} f={displayOrHide}></Dropdown> : <></>
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