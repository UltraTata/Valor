import {React, useContext} from 'react';
import { Text, View } from 'react-native';
import TextButton from './TextButton.js';
import { TalkContext } from '../Context/TalkContext.js';

export default function DivSucesos() {
    let context = useContext(TalkContext);
    if(context.talkable){
        return (
            <View style={styles.containter}>
                <Text style={styles.title}>¿Que paso? ¡Cuéntanos!</Text>
                <View style={styles.sucesoDiv}>
                    {
                        context.sucesos().map(
                            (suceso) => 
                                <View style={{margin:"1%"}}>
                                    <TextButton 
                                        onClick={() => {context.addHistorial(suceso)}}
                                        color="#E6D72A">
                                            {suceso.nombre}
                                    </TextButton>
                                </View>
                        )
                    }
                </View>
            </View>
        );
    }else{
        return (<></>);
    }
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
    sucesoDiv: {
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
        flex: 1,
        flexDirection: "row",
        margin:"3%"
    }
};