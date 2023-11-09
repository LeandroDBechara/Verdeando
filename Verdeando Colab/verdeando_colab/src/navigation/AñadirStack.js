import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AñadirIntercambio from '../screens/AñadirIntercambio'
import CrearIntercambio from '../screens/CrearIntercambio'

const Stack = createNativeStackNavigator()
const AñadirStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, }} 
            >
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

export default AñadirStack