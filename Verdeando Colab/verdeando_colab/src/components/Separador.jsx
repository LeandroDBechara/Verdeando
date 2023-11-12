import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Separador() {
    return (
        <View style={styles.container}>
            <View style={styles.linea}></View>
                <Text style={styles.texto}>O</Text>
            <View style={styles.linea}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        flexDirection:'row',
        alignSelf: 'center',
    },
    linea:{
        width:160,
        height: 1, // Grosor de la línea
        backgroundColor: '#D9D9D9', // Color de la línea
        alignSelf: 'center',
    },
    texto:{
        color:'#D9D9D9',
        fontSize:12,
        marginHorizontal:10
    }
})