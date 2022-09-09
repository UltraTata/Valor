import {React, useContext} from 'react';
import { View } from 'react-native';
import Pregunta from "./Pregunta.js";
import TextButton from './TextButton.js';
import cuestionarioJSON from "../JSON/Cuestionario.json";
import { TalkContext } from '../Context/TalkContext.js';
import { PreguntasContext } from '../Context/PreguntasContext.js';

export default function Cuestionario(params) {
    const {respuestas} = useContext(PreguntasContext);
    const {addHistorial} = useContext(TalkContext);
    const listo = () => {
        cuestionarioJSON.map(
            (pregunta, i) => {
                if(respuestas[i] > -1){
                    addHistorial(pregunta.respuestas[respuestas[i]]);
                }
            }
        );
        params.navigation.navigate("Estado");
    }
    return (
        <View style={styles.div}>
            {
                cuestionarioJSON.map(
                    (pregunta,i) => <Pregunta 
                        i={i}></Pregunta>
                )
            }
            <View style={{alignItems:"center"}}>
                <TextButton 
                    color="#fdcfdc"
                    style={styles.textButton}
                    onClick={listo}
                >¡Listo!</TextButton>
            </View>
        </View>
    );
}

const styles = {
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        marginStart: "3%",
        marginTop: "1%",
        paddingTop: "1%",
        paddingBottom: "1%"
    },
    textButton: {
        fontSize: "20px",
        fontWeight: "bold"
    }
};