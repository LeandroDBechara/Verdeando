import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './src/styles/inicioSesion'
import Titulo from './src/components/Titulo';


export default function App() {
  return (
    <View style={styles.container}>
          <Titulo />
      
    </View>
  )
}
