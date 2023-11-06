import { View, Text, TouchableOpacity, TextInput, ScrollView, useState} from 'react-native'
import { useFonts } from 'expo-font'
import React from 'react'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
import styles from '../styles/inicioSesion'
import imputs from '../styles/imputs'
import botones from '../styles/botones'


export default function Registrarse({navigation}) {
    const [fontsLoaded]= useFonts({
        'Roboto': require("../../assets/fonts/Roboto.ttf"),
    });
    if(!fontsLoaded) return null;
    return (
        <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
            <Titulo/>
            <Text style={styles.txtPrincipal}>¡Bienvenido!</Text>
            <RegistrarseGF/>
            <Separador/>
            <View style={imputs.container}>
                <TextInput style={imputs.imput} placeholder='Nombre:'/>
                <TextInput style={imputs.imput} placeholder='Apellido:'/>
                <TextInput style={imputs.imput} placeholder='Email:'/>
                <TextInput style={imputs.imput} placeholder='Contraseña:' secureTextEntry={true} />
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("InicioSesion")
                }}>
                    <Text style={styles.enlace2}>Ya tengo usuario</Text>
                </TouchableOpacity>         
            </View>
            <View style={botones.container}> 
                <TouchableOpacity style={botones.boton} onPress={()=>{}}> 
                    <Text style={botones.texto}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </ScrollView>
    )
}
