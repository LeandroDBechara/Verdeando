import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

export default function Titulo() {
    const [fontsLoaded]= useFonts({
        'PressStart': require("../../assets/fonts/PressStart.ttf"),
        'Roboto': require("../../assets/fonts/Roboto.ttf"),
    });
    if(!fontsLoaded) return null;
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>VERDEANDO</Text>
            <Text style={styles.subtitulo}>Colab</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 20,
        alignContent: 'center',   
    },
    titulo: {
        fontFamily:'PressStart',
        textAlign:'center',
        fontSize:30,
    },
    subtitulo: {
        fontFamily: 'Roboto',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold',
    },
});