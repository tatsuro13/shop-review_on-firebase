import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { ShopScreen } from '../screens/ShopScreen';

const Stack = createStackNavigator();



export const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions= {{headerTintColor: '#000'}}>
            <Stack.Screen name= "Home" component = {HomeScreen} options= {{headerShown: false}} />
            <Stack.Screen name= "Shop" component = {ShopScreen} />
        </Stack.Navigator>
    )
}