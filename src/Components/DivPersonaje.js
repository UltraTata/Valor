import {React, useContext} from 'react';
import { Text, View, Image } from 'react-native';
import {fotosDePerfil} from "../img/cargarImg.js";
import TextButton from './TextButton.js';
import { TalkContext } from '../Context/TalkContext.js';

export default function DivPersonaje(params) {

    const context = useContext(TalkContext);
    const elegir = () => {
        context.setPersonaje(params.personaje);
        context.setScreen("Estado");
    }
    return (
        <View style={styles.div}>
            <View style={{flexDirection: "row", width:"100%"}}>
                <Image style={styles.avatar} source={fotosDePerfil[params.personaje.img]}/>
                <View style={{marginStart: "3%"}}>
                    <Text style={styles.title}>{params.personaje.nombre}</Text>
                    <Text style={{marginBottom:"1%"}}>{params.personaje.desc}</Text>
                    <TextButton onClick={elegir} color="#fdcfdc">Elegir</TextButton>
                </View>
            </View>
        </View>
    );
}

const styles = {
    div: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        margin: "3%",
        padding: "3%"
    },
    avatar: {
        width: "20%",
        aspectRatio: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: "125%",
        marginBottom: "1%"
    }
}