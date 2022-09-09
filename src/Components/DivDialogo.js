import {React, useContext} from 'react';
import { Text, View } from 'react-native';
import { TalkContext } from '../Context/TalkContext.js';
import dialogosJSON from "../JSON/Dialogos.json";

export default function DivDialogo() {
    let context = useContext(TalkContext);
    let classes = [];
    context.sucesos().map(
        (suceso) => {classes.push(suceso.class)}
    );
    let dialogo = {"texto":{},"prioridad":-1000};
    dialogo["texto"][context.personaje.alias] = context.personaje.defaultDialogue;
    let tags = context.situacion();
    dialogosJSON.map(
        (d) => {
            classes.map(
                (c) => {
                    if(d.class == c){
                        if(dialogo.prioridad < d.prioridad){
                            let si = true;
                            let no = true;
                            if(Array.isArray(d.si)){
                                d.si.map(
                                    (condicion) => {
                                        let esta = false;
                                        tags.map(
                                            (tag) => {
                                                if(tag == condicion){
                                                    esta = true;
                                                }
                                            }
                                        );
                                        if(!(si && esta)){
                                            si = false;
                                        }
                                    }
                                );
                            }
                            tags.map(
                                (tag) => {
                                    if(Array.isArray(d.no)){
                                        d.no.map(
                                            (condicion) => {
                                                if(tag == condicion){
                                                    no = false;
                                                }
                                            }
                                        )
                                    }
                                }
                            );
                            if(si && no){
                                dialogo = d;
                            }
                        }
                    }
                }
            )
        }
    );
    dialogo = dialogo["texto"][context.personaje.alias];
    if(dialogo == ""){
        context.setTalkable(false);
        dialogo = context.personaje.defaultDialogue;
    }else{
        context.setTalkable(true);
    }
    return (
        <View style={styles.containter}>
            <Text style={styles.dialogosDiv}>
                {dialogo}
            </Text>
        </View>
    );
}

const styles = {
    title: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center"
    },
    containter: {
        backgroundColor: "#98DBC6",
        borderRadius: 8,
        width:"94%",
        marginStart: "3%",
        marginTop: "1%",
        padding: "3%"
    },
    dialogosDiv: {
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: "row",
        margin:"3%"
    }
};