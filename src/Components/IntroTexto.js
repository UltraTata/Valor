import { React, useState } from 'react';
import { Text, View } from 'react-native';
import intro from "../JSON/Intro.json";
import SvgButton from './SvgButton';

export default function IntroTexto() {
    const [lectura, setLectura] = useState(0);
    const [restart, setRestart] = useState(false);
    const back = () => {
        if(restart){
            setLectura(0);
        }else{
            if(lectura > 0){
                setLectura(lectura-1);
                setRestart(true);
                setTimeout(() => setRestart(false),200);
            }
        }
    }
    const next = () => {
        if(intro.length > lectura+1){
            setLectura(lectura+1);
        }
    }
    return (
        <View style={styles.container}>
            <Text>
                {intro[lectura].txt}
                <br></br>
                <br></br>
                
            </Text>
            <View style={styles.button}>
                <SvgButton viewBox={lectura > 0 ? "-2 -2 20 20" : "0 0 16 16"} size="40%" margin="3%" onClick={back} onLongPress={restart}>
                    {
                        lectura > 0 ?
                            "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        :
                            "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    }
                </SvgButton>
                <SvgButton viewBox={intro.length > lectura + 1 ? "-2 -2 20 20" : "0 0 16 16"} size="40%" margin="3%" onClick={next}>
                    {
                        intro.length > lectura + 1 ?
                            "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        :
                            "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                    }
                </SvgButton>
            </View>
        </View>
    );
}
let styles = {
    container: {
        width: "100%"
    },
    button: {
        width: "25%",
        flex: 1, 
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "end"
    }
}