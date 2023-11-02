import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './src/styles/inicioSesion'
import InicioSesion from './src/screens/InicioSesion';


export default function App() {
  return (
    <View style={styles.container}>
          <InicioSesion/>
    </View>
  )
}
