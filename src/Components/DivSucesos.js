import {React, useContext} from 'react';
import { Text, View } from 'react-native';
import TextButton from './TextButton.js';
import { TalkContext } from '../Context/TalkContext.js';
import SvgButton from './SvgButton.js';

export default function DivSucesos() {
    let context = useContext(TalkContext);
    if(context.talkable){
        return (
            <View style={styles.containter}>
                <SvgButton color="#E6D72A" viewBox="-1 -1 18 18" onClick={() => {context.deleteLast()}}>
                    M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z
                </SvgButton>
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



//cathe se la come a nahue.com 
//ari tambien jajsjasjajsja