import {createContext, React, useState} from 'react';

export const RoutingContext = createContext();

export function RoutingProvider(props){
    const [route, setRoute] = useState("loading");
    return (
        <RoutingContext.Provider value={{route, setRoute}}>{props.children}</RoutingContext.Provider>
    );
}