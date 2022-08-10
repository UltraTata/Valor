import {useHistory} from "react-router-native";
import Routes from "./JSON/Routes.json";

export function goTo(route){
    useHistory().push(route);
}

let goToRoute = [];

Routes.map(
    (route) => goToRoute.push(
        () => goTo(route)
    )
);

export default goToRoute;