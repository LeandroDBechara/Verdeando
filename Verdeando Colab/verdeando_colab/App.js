import { StatusBar } from 'expo-status-bar';
import {Text, View, Button } from 'react-native';
import styles from './src/styles/inicioSesion';
import Titulo from './src/components/titulo';



export default function App() {
  return (
    <View style={styles.container}>
      <titulo/>
      <StatusBar style="auto" />
    </View>
  );
}
