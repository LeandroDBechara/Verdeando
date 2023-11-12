import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
//import styles from '../styles/registrarseGF'

export default function RegistrarseGF() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.boton} onPress={()=>{}}> 
                <Image source={require('../../assets/Google-ico.png')} style={styles.iconos}></Image>  
            </TouchableOpacity> 
            <TouchableOpacity style={styles.boton} onPress={()=>{}}> 
                <Image source={require('../../assets/fb-ico.png')} style={styles.iconos}></Image>
            </TouchableOpacity> 
        </View> 
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    boton:{
        justifyContent: 'center',       
        width:160,
        height: 80,
        borderWidth:2,
        borderColor:'#E6E6E6',
        borderRadius: 10,
        marginHorizontal:10
        
    },
    iconos:{
        alignSelf:'center',
        width: 40,
        height: 40
    }
})