import React from 'react';
import { Text, View } from 'react-native';
import personajes from '../JSON/Personajes.json';
import DivPersonaje from './DivPersonaje.js';

export default function PantallaElegirPersonaje() {
    return (
        <View style={styles.container}>
            <Text>Elija con quien hablar</Text>
            {
                personajes.map(
                    (personaje) => <DivPersonaje personaje={personaje}/>
                )
            }
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        padding: "1%"
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