//import
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainMenu, SplashScreen} from './src/Screens';

//Function Component
const Stack = createNativeStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName='SplashScreen'>
            <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
            /> 

            <Stack.Screen
            name="MainMenu"
            component={MainMenu}
            options={{headerShown: false}}
            /> 

        </Stack.Navigator>
        </NavigationContainer>
    );
};

//Export
export default App;