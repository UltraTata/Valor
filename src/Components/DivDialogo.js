import {React, useContext} from 'react';
import { Text, View } from 'react-native';
import { TalkContext } from '../Context/TalkContext.js';
import dialogosJSON from "../JSON/Dialogos.json";
import SvgButton from './SvgButton.js';

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
            <SvgButton color="#E6D72A" viewBox="-1 -1 18 18" onClick={() => {context.deleteLast()}}>
                M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z
            </SvgButton>
            <View style={styles.preDialogo}>
                <Text style={styles.dialogosDiv}>
                    {dialogo}
                </Text>
            </View>
        </View>
    );
}

const styles = {
    title: {
        fontWeight: "bold",
        textAlign: "center"
    },
    containter: {
        width:"94%",
        flexDirection: "row",
        margin: "3%"
    },
    preDialogo: {
        backgroundColor: "#98DBC6",
        flex:1,
        borderRadius: 8,
        marginStart: "3%",
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