import {createContext, React, useState} from 'react';
import cuestionarioJSON from "../JSON/Cuestionario.json";

export const PreguntasContext = createContext();

export function PreguntasProvider(props){
    const undefinedAnswer = "";
    const [dropdown, setDropdown] = useState(-1);
    const displayOrHide = function(i){
        if(dropdown == -1){
            setDropdown(i);
        }else{
            setDropdown(-1);
        }
    }

    let w = [];
    cuestionarioJSON.map(
        () => w.push(-1)
    );

    const [respuestas, setRespuestas] = useState(w);

    const modificarRespuesta = function(i,v){
        let w = respuestas;
        w[i] = v;
        setRespuestas(w);
    }
    return (<PreguntasContext.Provider
        value={{
            respuestas,
            setRespuestas,
            dropdown,
            displayOrHide,
            modificarRespuesta
        }}>
            {props.children}
        </PreguntasContext.Provider>);
}
