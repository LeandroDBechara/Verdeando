import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer} from '@react-navigation/native'
import { DrawerNavigation } from '../navigation/MenuStack'
import { useState } from 'react'


export default function Header({navigation}) {
    // const [isDraweeOpen,setIsDrawerOpen]= useState(false);
    // const toggleDrawer =()=>{
    //     setIsDrawerOpen(!isDraweeOpen);
    // };
    return (
        <View style={styles.container} /*onPress={this.props.navigation.openDrawer}*/>
            <TouchableOpacity style={[styles.btn,styles.menu]}          
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