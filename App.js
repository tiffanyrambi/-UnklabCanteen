import React from "react";
import Cashier1 from "./src/screen/Cashier1";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
      name="Cashier1"
      component={Cashier1}
      options={{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
  
  );
};

//Export
export default App;