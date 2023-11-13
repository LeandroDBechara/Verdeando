import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'


export default function Header() {

    return (
        <View style={styles.container} >
            <TouchableOpacity 
                style={[styles.btn,styles.menu] } 
                onPress={()=>navigation.openDrawer()}
            >
                <Ionicons name="menu" size={40} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn,styles.notificacion]} >
                <Ionicons name="notifications" size={32} color="#6C6C6C" />
            </TouchableOpacity>


        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#11B11B',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btn:{
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        borderRadius:8
    },
    menu:{
        backgroundColor:'#11B11B',
    },
    notificacion:{
        backgroundColor:'#D9D9D9',
        
    },
    
    
})