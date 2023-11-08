import { View, TextInput } from 'react-native'
import React from 'react'
import imputs from '../styles/imputs'

export default function Busqueda() {
  return (
    <View style={imputs.container}>
      <TextInput style={imputs.imput} placeholder='Id o Email del jugador:'/>
    </View>
  )
}
