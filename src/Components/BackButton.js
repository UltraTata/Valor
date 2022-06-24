import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

export default function IntroTexto() {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Svg xmlns="http://www.w3.org/2000/svg" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <Path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></Path>
                </Svg>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"11%",
        marginStart: "3%",
        marginTop: "6%"
    },
    button: {
        backgroundColor: "#9DDCE0",
        borderRadius: 8,
        width:"100%",
        aspectRatio: 1
    }
});