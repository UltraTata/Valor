import React from 'react';
import { Text, View, Image } from 'react-native';
import Cuestionario from './Cuestionario.js';
import {PreguntasContext} from "../Context/PreguntasContext.js";
import personajes from '../JSON/Personajes.json';
import SvgButton from './SvgButton.js';
import DivPersonaje from './DivPersonaje.js';

export default function PantallaElegirPersonaje(params) {
    return (
        <View style={styles.container}>
            <Text>Elija con quien hablar</Text>
            <SvgButton onClick={() => params.navigation.navigate("Estado")}>
                M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z
            </SvgButton>
            {
                personajes.map(
                    (personaje) => <DivPersonaje personaje={personaje} navigation={params.navigation}/>
                )
            }
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
    littleDiv: {
        width: "50%",
        margin: "3%",
        justifyContent: "center",
        flexDirection: "row"
    },
    img: (size) => {return {
        width: size,
        aspectRatio: 1,
        margin: "3%"
    }}
};