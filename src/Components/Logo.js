import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import cuestionarioJSON from "../JSON/Cuestionario.json";
import { PreguntasContext } from '../Context/PreguntasContext';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function Logo(params) {
    return (
        <View style={styles(params).svg}>
            <Text style={styles(params).txt}></Text>
        </View>
    );
}

const styles = (params) => StyleSheet.create({
    svg: {
        textAlign: "center",
        backgroundColor: "black",
        width: params.width,
        height: params.height
    },
    txt: {
        color: "white"
    }
});