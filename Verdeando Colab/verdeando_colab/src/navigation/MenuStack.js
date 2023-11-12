import React from "react";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import Home from "../screens/Home";
import AñadirIntercambio from "../screens/AñadirIntercambio";
import { View } from "react-native-web";

const Drawer = createDrawerNavigator()

export function DrawerNavigation(){
    return(
        <DrawerNavigation
            drawerContent ={(props)=><MenuItems/>}
        >
            <Drawer.Screen name="Inicio" component={Home}/>
            <Drawer.Screen name="AñadirIntercambio" component={AñadirIntercambio}/>
        </DrawerNavigation>
        
    )
}

const MenuItems=({navigation})=>{
    return (
        <DrawerContentScrollView>
            <Text>Mi menu</Text>
        </DrawerContentScrollView>
    )
}