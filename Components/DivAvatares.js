import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {fotosDePerfil} from "../img/cargarImg.js";

const personajes = [
    {nombre:"Abuelita", avatar:fotosDePerfil.abuela},
    {nombre:"Trixie", avatar:fotosDePerfil.trixie},
    {nombre:"Conan", avatar:fotosDePerfil.conan},
    {nombre:"Alexios I Komnenos", avatar:fotosDePerfil.alexios}
];

export default function DivAvatares() {
    return (
        <View style={styles.div}>
            <Text style={{margin:"3%",textAlign: 'center'}}>Personajes</Text>
            <View style={{flexDirection:"row"}}>
                {
                    personajes.map(
                        (personaje) => <View style={styles.avatarCont}><Image style={styles.avatar} source={personaje.avatar}/><Text style={styles.avatarText}>{personaje.nombre}</Text></View>
                    )
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
        margin: "3%"
    },
    avatarCont: {
        width: "19%",
        margin: "3%"
    },
    avatar: {
        width: "100%",
        aspectRatio: 1
    },
    avatarText: {
        textAlign: "center"
    }
});