import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../screens/Login';
import CreateAccount from '../screens/CreateAccount';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Iniciar Sesion" component={Login}/>
            <Stack.Screen name="Registrarse" component={CreateAccount}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}