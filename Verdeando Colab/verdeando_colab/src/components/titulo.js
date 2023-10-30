import { StyleSheet } from "react-native";
import {Text} from 'react-native';
import { useFonts} from 'expo-font';

export default function Titulo() {
    
    const [fontsLoaded] = useFonts({
        Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
        Player: require("../../assets/fonts/PressStart2P-Regular.ttf")
    });
    if(!fontsLoaded) return null;
    return (
        <Text style={titulos.titulo}>VERDEANDO</Text>,
        <Text style={titulos.subtitulo}>Colab</Text>    );
}


const titulos = StyleSheet.create({
    titulo: {
        fontFamily: "Player",
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        fontSize: 40
        
    },
    subtitulo:{
        fontFamily: "Roboto",
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        fontSize: 30
    }
});
