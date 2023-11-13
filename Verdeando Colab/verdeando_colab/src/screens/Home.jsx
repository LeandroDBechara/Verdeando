import { Text, ScrollView,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import homeStyles from '../styles/home_style';
import Header from '../components/Header';

export default function Home() {
  
  return (
    <ScrollView style={homeStyles.container} keyboardShouldPersistTaps="handled" >
      {/* <Header/> */}
      <View style={homeStyles.subcontainer}>
        <Text style={homeStyles.titulo}>Tus canjes de hoy:</Text>
        <Text style={homeStyles.cantidad_diaria}>99 Kg</Text>
        <Text style={homeStyles.texto}>De reciclables ¡Sigue así!</Text>
          <TouchableOpacity style={homeStyles.boton} onPress={()=>{}}> 
            <Text style={homeStyles.texto_boton}>Añadir intercambio</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={homeStyles.texto}>Resumen de intercambios</Text>
        
      </View>
    </ScrollView>
  )
}


