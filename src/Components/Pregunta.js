import {React, useContext, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import cuestionarioJSON from "../JSON/Cuestionario.json";
import { PreguntasContext } from '../Context/PreguntasContext';

export default function Pregunta(params) {
    const {displayOrHide,respuestas,undefinedAnswer,dropdown} = useContext(PreguntasContext);
    let pregunta = cuestionarioJSON[params.i].pregunta;
    const displayDropdown = () => {displayOrHide(params.i);};
    return (
        <View onClick={displayDropdown} style={styles.div}>
            <Text style={styles.question}>{pregunta}</Text>
            <View style={styles.boxSizer}>
                    <Text style={styles.answer}>{respuestas[params.i] == -1 ? undefinedAnswer : cuestionarioJSON[params.i].respuestas[respuestas[params.i]]}</Text>
                <View style={styles.answerDiv}>
                    {dropdown == params.i ? 
                    <Svg viewBox="0 0 16 16" style={styles.svg} fill="black">
                        <Path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"></Path>
                    </Svg>

                    :

                    <Svg viewBox="0 0 16 16" style={styles.svg} fill="black">
                        <Path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></Path>
                    </Svg>
                    }
                </View>
            </View>
        </View>
    );
}

const styles = {
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        flexDirection:"row",
        margin: "3%"
    },
    boxSizer: {
        backgroundColor: "#fdcfdc",
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection:"row",
        marginHorizontal: "3%",
        paddingHorizontal: "1%"
    },
    answerDiv: {
    },
    question: {
    },
    answer: {
    },
    svg: {
        fill: "black",
        marginEnd: "1%",
        height: 16,
        aspectRatio: 1
    }
};