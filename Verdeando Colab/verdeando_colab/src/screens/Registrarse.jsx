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
import CheckBox from 'expo-checkbox'


export default function Registrarse({navigation}) {
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
                            <TextInput style={[inputs.general,inputs.inputLarge, { pointerEvents: 'none' }]} 
                                placeholder='dd/mm/aaaa' 
                                value={fecNac}
                                onChangeText={setfecNac}
                                editable={false}
                            /> 
                        </Pressable>
                    )
                }
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
                <View style={inputs.termCond}>
                    <CheckBox style={inputs.checkbox} color={isChecked? '#11B11B':undefined} value={isChecked} onValueChange={setChecked}/>
                    <Text style={inicioSesion.txtSecundario}> Acepto los </Text>
                    <TouchableOpacity onPress={()=>{}}> 
                        <Text style={[inicioSesion.txtSecundario, inicioSesion.enlace2]}>Términos y condiciones</Text>
                    </TouchableOpacity>     
                </View>
                
                
            <View style={botones.container}> 
                <TouchableOpacity  style={[botones.general,botones.btnLarge]}onPress={()=>{}}> 
                    <Text style={botones.texto}>Registrarse</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{
                    navigation.navigate("InicioSesion")
                }}>
                    <Text style={[inicioSesion.texto,inicioSesion.enlace2]}>Ya tengo usuario</Text>
                </TouchableOpacity>         
            </View>
            <Footer/>
        </ScrollView>
    )
}
