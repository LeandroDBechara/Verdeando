import { View, Text, TouchableOpacity, TextInput, ScrollView, Pressable, Platform} from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
import inputs from '../styles/imputs'
import botones from '../styles/botones'
import inicioSesion from '../styles/inicioSesion'


export default function Registrarse({navigation}) {
    const [input,setInput]=useState('');
    const [hidePass,setHidePass]=useState(true);

    return (
        <ScrollView style={inicioSesion.container} keyboardShouldPersistTaps="handled">
            <Titulo/>
            <Text style={[inicioSesion.texto,inicioSesion.titulo]}>¡Bienvenido!</Text>
            <RegistrarseGF/>
            <Separador/>
            <View style={inputs.container}>
                <Text style={inputs.titulosCampos}>Nombre(s)</Text>
                <TextInput style={[inputs.general,inputs.inputLarge]} placeholder='Ingrese su nombre...'/>
                <Text style={inputs.titulosCampos}>Apellido(s)</Text>
                <TextInput style={[inputs.general,inputs.inputLarge]} placeholder='Ingrese su apellido...'/>
                <Text style={inputs.titulosCampos}>Email</Text>
                <TextInput style={[inputs.general,inputs.inputLarge]} placeholder='example@gmail.com'/>
                <Text style={inputs.titulosCampos}>Fecha de nacimiento: </Text>
                <TextInput style={[inputs.general,inputs.inputLarge]} placeholder='01/01/1999' editable={false} />     
                <Text style={inputs.titulosCampos}>Contraseña:</Text>
                <View style={inputs.row}>
                    <TextInput 
                        style={[inputs.general,inputs.inputWithIcon]} 
                        placeholder='Ingrese una contraseña...' 
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
                
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("InicioSesion")
                }}>
                    <Text style={inicioSesion.enlace2}>Ya tengo usuario</Text>
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
