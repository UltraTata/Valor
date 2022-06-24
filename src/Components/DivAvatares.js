import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import avatar from "../img/avatar.png";

const personajes = [
    {nombre:"Abuelita", avatar:avatar},
    {nombre:"Señorita", avatar:avatar},
    {nombre:"Conan", avatar:avatar},
    {nombre:"Don Alexios", avatar:avatar}
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