import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu1, MainMenu, SplashScreen, Cashier } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false}} />
        <Stack.Screen name="Menu1" component={Menu1} options={{headerShown: false}} />
        <Stack.Screen name="Cashier" component={Cashier} options={{headerShown: false}} />
        {/* <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
};

export default Router;
