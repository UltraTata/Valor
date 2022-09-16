import { useContext, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { TalkContext } from "../Context/TalkContext";
import { fotosDePerfil } from "../img/cargarImg.js";

export default function LoadingScreen(params){
    const {loadData} = useContext(TalkContext);
    useEffect(() => {
        const fetchData = async () => {
          await loadData();
          params.navigation.navigate("Elegir personaje");
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