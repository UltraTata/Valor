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
    container: {
        width: "100%",
        height: "100%",
        flexDirection:'row'
    },
    textCont: {
        backgroundColor: '#fff',
        alignItems: 'end',
        justifyContent: 'center',
        borderWidth: 2,
        padding: 10,
        width:"80%",
        height:"17%",
        position: "absolute",
        start: "17%",
        top: "6%"
    },
    backButton: {
        backgroundColor: "#9DDCE0",
        borderRadius: 8,
        width:43,
        height:43,
        position: "absolute",
        start: "3%",
        top: "7%"
    }
});