import { Text, ScrollView,  View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import Busqueda from '../components/Busqueda';
import styles from '../styles/crearIntercambio';
import imputs from '../styles/imputs';

export default function CrearIntercambio({navigation}) {
  const [fontsLoaded]= useFonts({
    'Roboto': require("../../assets/fonts/Roboto.ttf"),
  });
  if(!fontsLoaded) return null;
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" >
      <Header/>
      <Text style={styles.titulo}>Añadir intercambio</Text>

      <View style={styles.datos_jugador}>
        <View style={styles.jugador_container}>
            <Text style={[styles.texto_general, styles.encabezados]}>Id jugador: </Text>
            <Text style={styles.texto_general}>1234567</Text>
        </View>
        <View style={styles.jugador_container}>
            <Text style={[styles.texto_general, styles.encabezados]}>Nombre y apellido: </Text>
            <Text style={styles.texto_general}> Juan Perez</Text>
        </View>
        <View style={imputs.container}>
          <TextInput style={imputs.imput} placeholder='Cantidad en gramos (g)'/>
        </View>
      </View>
        
      <View style={styles.recompensa_container} >

      </View>
      
      <TouchableOpacity style={styles.boton} onPress={()=>{}}> 
        <Ionicons name="camera" size={24} color="#FFFFFF" />
        <Text style={styles.texto_boton}>Escanear código del jugador</Text>
      </TouchableOpacity>
      <Text style={[styles.texto_general,styles.subtitulo]}>Búsqueda manual</Text>
      <Busqueda/>
      <TouchableOpacity style={styles.boton_continuar} onPress={()=>{navigation.navigate("CrearIntercambio")}}> 
        <Text style={[styles.encabezado_texto, styles.texto_continuar]}>Continuar</Text>
      </TouchableOpacity>
  </ScrollView>
  )
}
