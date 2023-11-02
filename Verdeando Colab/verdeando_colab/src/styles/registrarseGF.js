import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    boton:{
        justifyContent: 'center',       
        width:160,
        height: 80,
        borderWidth:2,
        borderColor:'#ECECEC',
        borderRadius: 10,
        marginHorizontal:10
        
    },
    iconos:{
        alignSelf:'center',
        width: 40,
        height: 40
    }

})
export default styles;