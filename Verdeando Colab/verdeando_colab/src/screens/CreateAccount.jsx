import { View, Text, TouchableOpacity, TextInput, ScrollView, Pressable, Platform} from 'react-native'
import React, {useState} from 'react'
import CheckBox from 'expo-checkbox'
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';
// ---------------------------------------------------------------------------------------------------------
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import RegistrarseGF from '../components/RegistrarseGF'
import Separador from '../components/Separador'
// ---------------------------------------------------------------------------------------------------------

import loginStyles from '../styles/login_style';
import inputStyles from '../styles/input_style';
import buttonStyles from '../styles/button_style';



export default function CreateAccount() {
    const [input,setInput]=useState('');
    const [hidePass,setHidePass]=useState(true);

    const [fecNac, setfecNac]=useState('');
    const [date,setDate]=useState(new Date());
    const [showPicker,setShowPicker]=useState(false);
    const toggleDatePicker=()=>{
        setShowPicker(!showPicker);
    };
    const onChange =({type}, selectedDate)=>{
        if(type=='set'){
            const currentDate=selectedDate;
            setDate(currentDate);
            if (Platform.OS==='android'){
                toggleDatePicker();
                setfecNac(formatDate(currentDate));
            }
        }else{
            toggleDatePicker();
        }
    };
    const formatDate=(rawDate)=>{
        let date =new Date(rawDate);
        let year =date.getFullYear();
        let month =date.getMonth()+1;
        let day = date.getDate();

        return `${day}/${month}/${year}`;
    };

    const [isChecked,setChecked]=useState(false);
    return (
        <ScrollView style={loginStyles.container} keyboardShouldPersistTaps="handled">
            <Titulo/>
            <Text style={[loginStyles.texto,loginStyles.titulo]}>¡Bienvenido!</Text>
            <RegistrarseGF/>
            <Separador/>
            <View style={inputStyles.container}>
                <Text style={inputStyles.titulosCampos}>Nombre(s)</Text>
                <TextInput style={[inputStyles.general,inputStyles.inputLarge]} placeholder='Ingrese su nombre...'/>
                <Text style={inputStyles.titulosCampos}>Apellido(s)</Text>
                <TextInput style={[inputStyles.general,inputStyles.inputLarge]} placeholder='Ingrese su apellido...'/>
                <Text style={inputStyles.titulosCampos}>Email</Text>
                <TextInput style={[inputStyles.general,inputStyles.inputLarge]} placeholder='example@gmail.com'/>
                <Text style={inputStyles.titulosCampos}>Fecha de nacimiento: </Text>
                {
                    showPicker ? (
                        <DateTimePicker
                            value={date}
                            mode='date'
                            display='spinner'
                            onChange={onChange}
                        />
                    )
                    :
                    (
                        <Pressable
                            onPress={toggleDatePicker}
                        >
                            <TextInput style={[inputStyles.general,inputStyles.inputLarge, { pointerEvents: 'none' }]} 
                                placeholder='dd/mm/aaaa' 
                                value={fecNac}
                                onChangeText={setfecNac}
                                editable={false}
                            /> 
                        </Pressable>
                    )
                }
                <Text style={inputStyles.titulosCampos}>Contraseña:</Text>
                <View style={inputStyles.row}>
                    <TextInput 
                        style={[inputStyles.general,inputStyles.inputWithIcon]} 
                        placeholder='Ingrese una contraseña...' 
                        value={input} 
                        onChangeText={(texto)=>setInput(texto)}
                        secureTextEntry={hidePass} 
                    />
                    <TouchableOpacity style={[inputStyles.general,inputStyles.icon]} activeOpacity={1} onPress={()=>setHidePass(!hidePass)}> 
                        {hidePass?
                            <Ionicons name="eye-off" size={32} color="#D9D9D9" />
                            :
                            <Ionicons name="eye" size={32} color="#D9D9D9" />
                        } 
                    </TouchableOpacity> 
                    
                </View>
                <View style={inputStyles.termCond}>
                    <CheckBox style={inputStyles.checkbox} color={isChecked? '#11B11B':undefined} value={isChecked} onValueChange={setChecked}/>
                    <Text style={loginStyles.txtSecundario}> Acepto los </Text>
                    <TouchableOpacity onPress={()=>{}}> 
                        <Text style={[loginStyles.txtSecundario, loginStyles.enlace2]}>Términos y condiciones</Text>
                    </TouchableOpacity>     
                </View>
                
                
            <View style={buttonStyles.container}> 
                <TouchableOpacity  style={[buttonStyles.general,buttonStyles.btnLarge]}onPress={()=>{}}> 
                    <Text style={buttonStyles.texto}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{ }}>
                    <Text style={[loginStyles.texto,loginStyles.enlace2]}>Ya tengo usuario</Text>
                </TouchableOpacity>         
            </View>
            <Footer/>
        </ScrollView>
    )
}
