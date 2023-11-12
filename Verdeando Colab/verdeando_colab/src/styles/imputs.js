import { StyleSheet } from "react-native";

const inputs = StyleSheet.create({
    container:{
        margin:20,
    },
    row:{
        flexDirection:'row',
        justifyContent:'center'
    },
    general:{
        marginBottom:20,
        justifyContent: 'center',
        backgroundColor:'#ECECEC'
    },
    titulosCampos:{
        fontSize:16,    
        marginLeft: 20,
        marginBottom:10
    
    },
    inputLarge:{
        width: 360,
        height: 54,
        paddingHorizontal:20,
        fontSize:18,
        alignSelf: 'center',
        borderRadius: 16,
    },
    inputWithIcon:{
        width: 300,
        height: 54,
        paddingHorizontal:20,
        fontSize:18,
        borderTopLeftRadius:16,
        borderBottomLeftRadius:16,
    },
    icon:{
        width: 60,
        height: 54,
        borderTopEndRadius:16,
        borderBottomEndRadius:16,
    },
    checkbox:{
        borderColor:'#11B11B'
    },
    termCond:{
        flexDirection:'row', 
        marginLeft:20, 
        marginTop:10,
        alignContent:'space-around'
    }
    
})
export default inputs;