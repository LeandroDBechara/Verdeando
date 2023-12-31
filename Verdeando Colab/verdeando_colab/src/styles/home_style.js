import { StyleSheet } from "react-native"

const homeStyles= StyleSheet.create({
    container:{
        flex:1
    },
    subcontainer:{
        marginVertical: 20,
        marginHorizontal:30
    }, 
    titulo:{
        fontSize:30,
        fontWeight:'900'
    },
    cantidad_diaria:{
        paddingTop:30,
        fontSize:60,
        fontWeight:'bold',
        alignSelf:'center'
    },
    texto:{
        fontSize:20,
        alignSelf:'center',
        fontWeight:'700',
    },
    boton:{
        marginTop: 30,
        width: 290,
        height: 50,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor:'#11B11B'
    },
    texto_boton:{
        fontSize:20,
        color:'#FFFFFF',
    },
    
    

})
export default homeStyles;