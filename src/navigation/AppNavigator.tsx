import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { MainTabNavigator } from './MainTabNavigator';
import AuthScreen from '../screens/AuthScreen';
import { UserConText } from '../contexts/userContexts';

export const AppNavigator = () => {
    const { user } = useContext(UserConText);
    return(
        <NavigationContainer>
            {!user ? <AuthScreen /> : <MainTabNavigator />}
        </NavigationContainer>
    )
}