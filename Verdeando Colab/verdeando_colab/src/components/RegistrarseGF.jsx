import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../styles/registrarseGF'

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