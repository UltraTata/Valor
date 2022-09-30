import { useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { RoutingContext } from "../Context/RoutingContext";
import { TalkContext } from "../Context/TalkContext";
import { fotosDePerfil } from "../img/cargarImg.js";

export default function LoadingScreen(){
    const {loadData} = useContext(TalkContext);
    const {setRoute} = useContext(RoutingContext);
    useEffect(() => {
        const fetchData = async () => {
            await loadData();
            setRoute("Personaje");
        };

        fetchData()
            // make sure to catch any error
            .catch(console.error);;
        }, [])

    return (
        <View styles={styles.container}>
            <Image style={styles.img("50%")} source={fotosDePerfil["logo"]}/>
            <Text>Cargando...</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        border: "solid"
    },
    img: (size) => {
        return {
            width: size,
            aspectRatio: 1
        }
    }
};