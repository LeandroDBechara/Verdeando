import { Text, ScrollView,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import home from '../styles/home';
import Header from '../components/Header';

export default function Home({navigation}) {
  
  return (
    <ScrollView style={home.container} keyboardShouldPersistTaps="handled" >
      <Header/>
      <View style={home.subcontainer}>
        <Text style={home.titulo}>Tus canjes de hoy:</Text>
        <Text style={home.cantidad_diaria}>99 Kg</Text>
        <Text style={home.texto}>De reciclables ¡Sigue así!</Text>
          <TouchableOpacity style={home.boton} onPress={()=>{navigation.navigate("AñadirIntercambio")}}> 
            <Text style={home.texto_boton}>Añadir intercambio</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={home.texto}>Resumen de intercambios</Text>
        
      </View>
    </ScrollView>
  )
}


