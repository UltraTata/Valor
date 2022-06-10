import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import avatar from "../img/avatar.png";

export default function DivAvatares() {
    return (
        <View style={styles.div}>
            <Text style={{margin:"3%",align:"center"}}>Personajes</Text>
            <View style={{flexDirection:"row"}}>
                <Image style={styles.avatar} source={avatar}/>
                <Image style={styles.avatar} source={avatar}/>
                <Image style={styles.avatar} source={avatar}/>
                <Image style={styles.avatar} source={avatar}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"91%",
        height:"18%",
        position: "absolute",
        start: "3%",
        paddingBottom:"3%",
        top: "24%"
    },
    avatar: {
        width: "19%",
        aspectRatio: 1,
        margin: "3%"
    }
});