import { StyleSheet } from 'react-native';

const inicioSesion = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    texto:{
        textAlign:'center',
    },
    titulo:{
        marginTop:15,
        fontSize: 32,
        letterSpacing: 1.28,
        fontWeight: 'bold'
    },
    txtSecundario: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    enlace: {
        color:'#DB4141',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    renglon:{
        marginTop:25,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    enlace2:{
        color:'black',
        textDecorationLine: 'underline',
    }
})

export default inicioSesion;