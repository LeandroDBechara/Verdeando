import { createDrawerNavigator } from "@react-navigation/drawer";
import {CreateAppContainer} from '@react-navigation'
import Home from "../screens/Home";
import AñadirIntercambio from "../screens/AñadirIntercambio";

const RootDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:Home,
    },
    AñadirIntercambio:{
        screen: AñadirIntercambio
    }
    
});
export default CreateAppContainer(RootDrawerNavigator);
