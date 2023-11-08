import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import InicioSesion from '../screens/InicioSesion'
import Registrarse from '../screens/Registrarse'
import AñadirIntercambio from '../screens/AñadirIntercambio'
import Home from '../screens/Home'
import CrearIntercambio from '../screens/CrearIntercambio'

const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, }} 
            >
                <Stack.Screen 
                    name='InicioSesion'
                    component={InicioSesion}
                />
                <Stack.Screen 
                    name='Registrarse'
                    component={Registrarse}
                />
                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
                <Stack.Screen 
                    name='AñadirIntercambio'
                    component={AñadirIntercambio}
                />
                <Stack.Screen 
                    name='CrearIntercambio'
                    component={CrearIntercambio}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack