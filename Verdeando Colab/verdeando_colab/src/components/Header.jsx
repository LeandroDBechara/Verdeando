import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menu}>
                <FontAwesome5 name="bars" size={32} color='#FFFFFF'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificacion}>
                <Ionicons name="notifications" size={32} color="#6C6C6C" />
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
    menu:{
        margin: 20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#11B11B',
        width:50,
        height:50,
        borderRadius:8
    },
    notificacion:{
        margin: 20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#D9D9D9',
        width:50,
        height:50,
        borderRadius:8
    },
    
    
})