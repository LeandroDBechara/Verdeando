import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, StatusBar} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
// ---------------------------------------------------------------------------------------------------------
import Titulo from '../components/Titulo'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
import Footer from '../components/Footer'
// ---------------------------------------------------------------------------------------------------------
import inputStyle from '../styles/input_style'
import buttonStyles from '../styles/button_style'
import loginStyles from '../styles/login_style'

export default function Login() {
    const [input,setInput]=useState('');
    const [hidePass,setHidePass]=useState(true);

    return (
        <ScrollView style={loginStyles.container} keyboardShouldPersistTaps="handled">
            <Titulo />
            <Text style={[loginStyles.texto,loginStyles.titulo]}>Iniciar Sesión</Text>
            <View style={loginStyles.renglon}>
                <Text style={loginStyles.txtSecundario}>¿Aún no tienes cuenta? </Text>
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={loginStyles.enlace}>¡Regístrate aquí!</Text>
                </TouchableOpacity> 
            </View>
            <RegistrarseGF/>
            <Separador/>
            <View style={inputStyle.container}>
                <TextInput style={[inputStyle.general,inputStyle.inputLarge]} placeholder='Email:'/>
                <View style={inputStyle.row}>
                    <TextInput 
                        style={[inputStyle.general,inputStyle.inputWithIcon]} 
                        placeholder='Contraseña:' 
                        value={input} 
                        onChangeText={(texto)=>setInput(texto)}
                        secureTextEntry={hidePass} 
                    />
                    <TouchableOpacity style={[inputStyle.general,inputStyle.icon]} activeOpacity={1} onPress={()=>setHidePass(!hidePass)}> 
                        {hidePass?
                            <Ionicons name="eye-off" size={32} color="#D9D9D9" />
                            :
                            <Ionicons name="eye" size={32} color="#D9D9D9" />
                        } 
                    </TouchableOpacity> 
                </View>
            </View>
                <TouchableOpacity onPress={()=>{}}> 
                    <Text style={[loginStyles.texto,loginStyles.enlace2]}>¿Has olvidado la contraseña?</Text>
                </TouchableOpacity>
            <View style={buttonStyles.container}> 
                <TouchableOpacity style={[buttonStyles.general,buttonStyles.btnLarge]} onPress={()=>{}}> 
                    <Text style={buttonStyles.texto}>Ingresar</Text>
                </TouchableOpacity>
            </View>
            <Footer/>
        </ScrollView>
    )
}