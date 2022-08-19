import {createContext, React, useState} from 'react';
import personajesJSON from "../JSON/Personajes.json";

export const TalkContext = createContext();

export function TalkProvider(props){
    const [personaje, setPersonaje] = useState(personajesJSON[0]);
    const [historial, setHistorial] = useState([]);

    const addHistorial = (x) => {
        let newHistorial = historial;
        newHistorial.push(x);
        setHistorial(newHistorial);
    }

    const deleteLast = () => {
        let newHistorial = historial;
        newHistorial.slice(historial.length-1,1);
        setHistorial(newHistorial);
    }

    return (<TalkContext.Provider
        value={{
            personaje,
            setPersonaje,
            historial,
            addHistorial,
            deleteLast
        }}>
            {props.children}
        </TalkContext.Provider>);
}