import { StyleSheet, View, Text, } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Font from 'expo-font'

export default function App() {
  const [fontsLoaded, setFontsLoaded]= useState(false);
    useEffect (() =>{
      if(!fontsLoaded){
        loadfonts();
      } 
    });
  const loadfonts = async () =>{
    await Font.loadAsync({
      'pressStart': require('./assets/fonts/PressStart.ttf',)
    });
  setFontsLoaded(true);
  }
  if (!fontsLoaded){
    return(<View/>)
  }
  return (
    <View>
      <Text style={{fontFamily: 'pressStart'}}>App</Text>
    </View>
  )
}
