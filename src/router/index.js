import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{SplashScreen, SignIn, SignUp, Home, MainMenu, Cashier, SuccessfulScreen} from '../pages';


const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Cashier" component={Cashier} options={{ headerShown: false }} />
            <Stack.Screen name="SuccessfulScreen" component={SuccessfulScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        
    );
};

export default Router;
