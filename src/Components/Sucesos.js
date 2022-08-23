import {React, useContext} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import TextButton from './TextButton.js';
import sucesosJSON from "../JSON/Sucesos.json";
import { PreguntasContext } from '../Context/PreguntasContext.js';

export default function Sucesos(params) {
    const {respuestas, dropdown} = useContext(PreguntasContext);
    return (
        <View style={styles.containter}>
            <Text style={styles.title}>¿Que paso? ¡Cuéntanos!</Text>
            <View style={styles.sucesoDiv}>
                {
                    sucesosJSON.map(
                        (suceso) => <View style={{margin:"1%"}}><TextButton color="#E6D72A">{suceso.nombre}</TextButton></View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center"
    },
    containter: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        marginStart: "3%",
        marginTop: "1%",
        padding: "3%"
    },
    sucesoDiv: {
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: "row",
        margin:"3%"
    }
});