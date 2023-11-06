import { Text, ScrollView } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'

export default function Home(navigation) {
  return (
    <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="handled" >
      <Text>Home</Text>
    </ScrollView>
  )
}


