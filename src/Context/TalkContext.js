import {createContext, React, useState} from 'react';
import personajesJSON from "../JSON/Personajes.json";

export const TalkContext = createContext();

export function TalkProvider(props){
    const undefinedAnswer = "";
    const [talkingWith, setTalkingWith] = useState(personajesJSON[0]);

    return (<TalkContext.Provider
        value={{
            talkingWith,
            setTalkingWith
        }}>
            {props.children}
        </TalkContext.Provider>);
}
