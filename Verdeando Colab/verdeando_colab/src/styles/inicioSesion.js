import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{ 
        flex:1,
    },
    txtPrincipal:{
        fontFamily:'Roboto',
        marginTop:30,
        textAlign:'center',
        fontSize: 32,
        letterSpacing: 1.28,
        fontWeight: 'bold'
    },
    txtSecundario: {
        fontFamily:'Roboto', 
        fontSize: 16,
        fontWeight: 'bold'
    },
    enlace: {
        color:'#DB4141',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    renglon:{
        //backgroundColor: 'yellow',
        marginTop:25,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    enlace2:{
        fontFamily:'Roboto', 
        alignSelf:'center',
        color:'black',
        textDecorationLine: 'underline',

    }
})

export default styles;