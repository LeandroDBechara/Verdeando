import { Text, ScrollView,  View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import styles from '../styles/home';
import Header from '../components/Header';

export default function Home(navigation) {
  const [fontsLoaded]= useFonts({
    'Roboto': require("../../assets/fonts/Roboto.ttf"),
  });
  if(!fontsLoaded) return null;
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled" >
      <Header/>
      <View style={styles.subcont2}>
        <Text style={styles.titulo}>Tus canjes de hoy:</Text>
        <Text style={styles.cantidad_diaria}>99 Kg</Text>
        <Text style={styles.texto}>De reciclables ¡Sigue así!</Text>
          <TouchableOpacity style={styles.boton} onPress={()=>{}}> 
            <Text style={styles.texto_boton}>Añadir intercambio</Text>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.texto}>Resumen de intercambios</Text>
        
      </View>
    </ScrollView>
  )
}


