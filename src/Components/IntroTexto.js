import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IntroTexto() {
return (
    <ScrollView>
        <Text style={{textAlign: "right"}}>
            [Intro, presentan a los 4 personajes y motiva al usuario]
            <br></br>
            “Oh! Has tenido que recurrir a la famosa aplicación VALOR.”
            <br></br>
            “Bueno, es un poco bochornoso pero...”
            <br></br>
            “No pasa nada. Te vamos a ayudar”
        </Text>
    </ScrollView>
);
}