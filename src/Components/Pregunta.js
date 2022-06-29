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
    inlineStyles,
  } from 'react-native-svg';

  export default function Pregunta(params) {
      let pregunta = params["pregunta"]["pregunta"];
      let respuestas = params["pregunta"]["respuestas"]
    return (
        <View style={styles.div}>
            <Text style={styles.question}>{pregunta}</Text>
            <View style={styles.boxSizer}>
                    <Text style={styles.answer}>{respuestas[0]}</Text>
                <View style={styles.answerDiv}>
                    <Svg viewBox="0 0 16 16" style={styles.svg} fill="black">
                        <Path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></Path>
                    </Svg>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        flexDirection:"row",
        margin: "1%"
    },
    boxSizer: {
        backgroundColor: "#fdcfdc",
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        flexDirection:"row",
        marginHorizontal: "3%",
        paddingHorizontal: "1%"
    },
    answerDiv: {
    },
    question: {
    },
    answer: {
    },
    svg: {
        fill: "black",
        marginEnd: "1%",
        height: 16,
        aspectRatio: 1
    }
});