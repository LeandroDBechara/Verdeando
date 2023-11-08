import { Text, ScrollView,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import styles from '../styles/añadirIntercambio';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import Busqueda from '../components/Busqueda';


export default function Home({navigation}) {
  const [fontsLoaded]= useFonts({
    'Roboto': require("../../assets/fonts/Roboto.ttf"),
  });
  if(!fontsLoaded) return null;
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" >
      <Header/>
      <View style={styles.subcont2}>
        <Text style={styles.titulo}>Añadir intercambio</Text>
        <TouchableOpacity style={styles.boton} onPress={()=>{}}> 
          <Ionicons name="camera" size={24} color="#FFFFFF" />
          <Text style={styles.texto_boton}>Escanear código del jugador</Text>
        </TouchableOpacity>
        <Text style={styles.texto}>Búsqueda manual</Text>
        <Busqueda/>
        <View style={styles.datos}>
          <View style={styles.encabezado_container}>
            <Text style={styles.encabezados}>Id jugador: </Text>
            <Text style={styles.encabezado_texto}>1234567</Text>
          </View>
          <View style={styles.encabezado_container}>
            <Text style={styles.encabezados}>Nombre y apellido: </Text>
            <Text style={styles.encabezado_texto}> Juan Perez</Text>
          </View>
          <TouchableOpacity style={styles.boton_continuar} onPress={()=>{navigation.navigate("CrearIntercambio")}}> 
            <Text style={[styles.encabezado_texto, styles.texto_continuar]}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}