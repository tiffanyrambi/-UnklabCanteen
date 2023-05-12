import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu1, SplashScreen } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="Menu1" component={Menu1} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
