import { View, Text, TouchableOpacity, TextInput, ScrollView, StatusBar} from 'react-native'
import React from 'react'
import styles from '../styles/inicioSesion'
import Titulo from '../components/Titulo'
import { useFonts } from 'expo-font'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
import imputs from '../styles/imputs'
import botones from '../styles/botones'
import Footer from '../components/Footer'

export default function InicioSesion({navigation}) {
    const [fontsLoaded]= useFonts({
        'Roboto': require("../../assets/fonts/Roboto.ttf"),
    });
    if(!fontsLoaded) return null;

    return (
        <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled">
            <StatusBar/> 
            <Titulo />
            <Text style={styles.txtPrincipal}>Iniciar Sesión</Text>
            <View style={styles.renglon}>
                <Text style={styles.txtSecundario}>¿Aún no tienes cuenta? </Text>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Registrarse")
                }}> 
                <Text style={styles.enlace}>¡Regístrate aquí!</Text>
                </TouchableOpacity> 
            </View>
            <RegistrarseGF/>
            <Separador/>
            <View style={imputs.container}>
                <TextInput style={imputs.imput} placeholder='Email:'/>
                <TextInput style={imputs.imput} placeholder='Contraseña:' secureTextEntry={true} />
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={styles.enlace2}>¿Has olvidado la contraseña?</Text>
                </TouchableOpacity>         
            </View>
            <View style={botones.container}> 
                <TouchableOpacity style={botones.boton} onPress={()=>{navigation.navigate("Home")}}> 
                    <Text style={botones.texto}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </ScrollView>
    )
}