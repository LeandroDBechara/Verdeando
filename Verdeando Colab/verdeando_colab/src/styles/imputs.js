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
    
    inputLarge:{
        width: 360,
        height: 65,
        paddingHorizontal:20,
        fontSize:18,
        alignSelf: 'center',
        borderRadius: 16,
    },
    inputWithIcon:{
        width: 300,
        height: 65,
        paddingHorizontal:20,
        fontSize:18,
        borderTopLeftRadius:16,
        borderBottomLeftRadius:16,
    },
    icon:{
        width: 60,
        height: 65,
        borderTopEndRadius:16,
        borderBottomEndRadius:16,
    }
    
})
export default inputs;