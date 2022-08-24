import {createContext, React, useState} from 'react';
import personajesJSON from "../JSON/Personajes.json";
import sucesosJSON from "../JSON/Sucesos.json";

export const TalkContext = createContext();

export function TalkProvider(props){
    const [personaje, setPersonaje] = useState(personajesJSON[0]);
    const [historial, setHistorial] = useState([]);

    const addHistorial = (x) => {
        let newHistorial = cloneArray(historial);
        newHistorial.push(x);
        setHistorial(newHistorial);
    }

    const deleteLast = () => {
        let newHistorial =  cloneArray(historial);
        newHistorial.slice(historial.length-1,1);
        setHistorial(newHistorial);
    }

    const situacion = () => {
        let tags = [];
        historial.map(
            (h) => {
                h.efecto.map(
                    (ef) => {
                        tags.push(ef);
                    }
                );

                h.anula.map(
                    (ef) => {
                        tags.map(
                            (tag, i) => {
                                if(tag == ef){
                                    tags.splice(i,1);
                                }
                            }
                        );
                    }
                );
            }
        );

        return tags;
    }

    const sucesos = () => {
        let tags = situacion();
        let array = [];
        sucesosJSON.map(
            (suceso) => {
                let si = true;
                let no = true;
                suceso.si.map(
                    (si) => {
                        let esta = false;
                        tags.map(
                            (tag) => {
                                if(tag == si){
                                    esta = true;
                                }
                            }
                        );
                        if(!(si && esta)){
                            si = false;
                        }
                    }
                );
                tags.map(
                    (tag) => {
                        suceso.no.map(
                            (no) => {
                                if(no == tag){
                                    no = false;
                                }
                            }
                        )
                    }
                );
                if(si && no){
                    array.push(suceso);
                }
            }
        );
        return array;
    }

    return (<TalkContext.Provider
        value={{
            personaje,
            setPersonaje,
            historial,
            addHistorial,
            deleteLast,
            situacion,
            sucesos
        }}>
            {props.children}
        </TalkContext.Provider>);
}