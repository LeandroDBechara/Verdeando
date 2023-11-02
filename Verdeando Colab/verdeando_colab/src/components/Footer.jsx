import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Versión 1.0.02112023</Text>
            <Text style={styles.texto}>Dodo Games™</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
    },
    texto:{
        fontFamily:'Roboto',
        fontSize:10
    }
})
