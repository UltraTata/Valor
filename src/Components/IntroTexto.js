import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function IntroTexto() {
return (
    <View style={styles.textCont}>
        <ScrollView>
            <Text style={styles.text}>
                [Intro, presentan a los 4 personajes y motiva al usuario]
                <br></br>
                “Oh! Has tenido que recurrir a la famosa aplicación VALOR.”
                <br></br>
                “Bueno, es un poco bochornoso pero...”
                <br></br>
                “No pasa nada. Te vamos a ayudar”
            </Text>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
    textCont: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        padding: 10,
        height:"100%",
        marginStart: "3%",
        marginTop: "6%"
    },
    text:{
        color: "black",
        textAlign: 'center',
    }
});