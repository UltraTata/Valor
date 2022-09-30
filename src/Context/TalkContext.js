import {createContext, React, useState} from 'react';
import personajesJSON from "../JSON/Personajes.json";
import sucesosJSON from "../JSON/Sucesos.json";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const TalkContext = createContext();

export function TalkProvider(props){
    const [talkable, setTalkable] = useState(true);
    const [personaje, setPersonaje] = useState(personajesJSON[2]);
    
    const [historial, setHistorial] = useState({list:[]});
    
    let loadData = async () => {
        let data = await AsyncStorage.getItem('historial');
        if(typeof data == "object" && data !== null){
            if(Array.isArray(data.list)){
                setHistorial(JSON.parse(data));
            }
        }
    };

    let saveData = async () => {
        await AsyncStorage.setItem('historial', JSON.stringify(historial));
    };

    const addHistorial = (x) => {
        let newHistorial = historial.list;
        newHistorial.push(x);
        setHistorial({list:newHistorial});
        saveData();
    }

    const deleteLast = () => {
        let newHistorial =  historial.list;
        newHistorial.splice(historial.list.length-1);
        setHistorial({list:newHistorial});
        saveData();
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
                        if(Array.isArray(suceso.no)){
                            suceso.no.map(
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
                    array.push(suceso);
                }
            }
        );
        return array;
    }

    return (<TalkContext.Provider
        value={{
            loadData,
            personaje,
            setPersonaje,
            historial,
            addHistorial,
            talkable, 
            setTalkable,
            deleteLast,
            situacion,
            sucesos
        }}>
            {props.children}
        </TalkContext.Provider>);
}