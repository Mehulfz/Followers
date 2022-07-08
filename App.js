import React from "react";
import { View, Text } from "react-native";
// import Navbar from "./src/components/Navbar";
import Fl from "./src/screens/Fl";
import Selectedusers from "./src/screens/Selectedusers";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App =()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Fl'>
        <Stack.Screen name="Fl" component={Fl} options={{headerShown:false}}/>
        <Stack.Screen name="Selectedusers" component={Selectedusers} options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App