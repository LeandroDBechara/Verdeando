import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, StatusBar} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import inicioSesion from '../styles/inicioSesion'
import Titulo from '../components/Titulo'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
import inputs from '../styles/imputs'
import botones from '../styles/botones'
import Footer from '../components/Footer'

export default function InicioSesion({navigation}) {
    const [input,setInput]=useState('');
    const [hidePass,setHidePass]=useState(true);

    return (
        <ScrollView style={inicioSesion.container} keyboardShouldPersistTaps="handled">
            <StatusBar backgroundColor={'#0C8414'} /> 
            <Titulo />
            <Text style={[inicioSesion.texto,inicioSesion.titulo]}>Iniciar Sesión</Text>
            <View style={inicioSesion.renglon}>
                <Text style={inicioSesion.txtSecundario}>¿Aún no tienes cuenta? </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate("Registrarse")}}> 
                    <Text style={inicioSesion.enlace}>¡Regístrate aquí!</Text>
                </TouchableOpacity> 
            </View>
            <RegistrarseGF/>
            <Separador/>
            <View style={inputs.container}>
                <TextInput style={[inputs.general,inputs.inputLarge]} placeholder='Email:'/>
                <View style={inputs.row}>
                    <TextInput 
                        style={[inputs.general,inputs.inputWithIcon]} 
                        placeholder='Contraseña:' 
                        value={input} 
                        onChangeText={(texto)=>setInput(texto)}
                        secureTextEntry={hidePass} 
                    />
                    <TouchableOpacity style={[inputs.general,inputs.icon]} activeOpacity={1} onPress={()=>setHidePass(!hidePass)}> 
                        {hidePass?
                            <Ionicons name="eye-off" size={32} color="#D9D9D9" />
                            :
                            <Ionicons name="eye" size={32} color="#D9D9D9" />
                        } 
                    </TouchableOpacity> 
                </View>
            </View>
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={[inicioSesion.texto,inicioSesion.enlace2]}>¿Has olvidado la contraseña?</Text>
                </TouchableOpacity>
            <View style={botones.container}> 
                <TouchableOpacity style={[botones.general,botones.btnLarge]} onPress={()=>{navigation.navigate("Home")}}> 
                    <Text style={botones.texto}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </ScrollView>
    )
}