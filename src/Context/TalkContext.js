import {createContext, React, useState} from 'react';
import personajesJSON from "../JSON/Personajes.json";
import sucesosJSON from "../JSON/Sucesos.json";
import cloneArray from "./cloneArray.js";

export const TalkContext = createContext();

export function TalkProvider(props){
    const [personaje, setPersonaje] = useState(personajesJSON[0]);
    const [historial, setHistorial] = useState({list:[]});

    const addHistorial = (x) => {
        let newHistorial = historial.list;
        newHistorial.push(x);
        setHistorial({list:newHistorial});
    }

    const deleteLast = () => {
        let newHistorial =  historial.list;
        newHistorial.slice(historial.list.length-1,1);
        setHistorial({list:newHistorial});
    }

    const situacion = () => {
        let tags = [];
        historial.list.map(
            (h) => {
                if(Array.isArray(h.efectos)){
                    h.efectos.map(
                        (ef) => {
                            tags.push(ef);
                        }
                    );
                }

                if(Array.isArray(h.anula)){
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
                if(Array.isArray(suceso.si)){
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
                }
                tags.map(
                    (tag) => {
                        if(Array.isArray(suceso.no)){
                            suceso.no.map(
                                (no) => {
                                    if(no == tag){
                                        no = false;
                                    }
                                }
                            )
                        }
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