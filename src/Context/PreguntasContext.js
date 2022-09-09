import {createContext, React, useState} from 'react';
import cuestionarioJSON from "../JSON/Cuestionario.json";

export const PreguntasContext = createContext();

export function PreguntasProvider(props){
    const cloneArray = (array) => {
        let newArray = [];
        array.map(
            (element) => {newArray.push(element)}
        );
        return newArray;
    }
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
        let w = cloneArray(respuestas);
        w[i] = v;
        setRespuestas(w);
    }
    return (<PreguntasContext.Provider
        value={{
            respuestas,
            setRespuestas,
            dropdown,
            displayOrHide,
            modificarRespuesta,
            undefinedAnswer
        }}>
            {props.children}
        </PreguntasContext.Provider>);
}
