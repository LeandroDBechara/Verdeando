import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'

export default function InfoJugador(props) {
  return (
    <DrawerContentScrollView>
        <DrawerItemList{...props}/>
    </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({})