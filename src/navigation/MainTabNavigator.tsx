import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './HomeStackNavigator';
import { UserScreen } from '../screens/UserScreen';
import { Feather } from "@expo/vector-icons";
import { SearchScreen } from '../screens/SearchScreen';


const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: "#900",
        inactiveTintColor: "#900",
    }}>
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="User" component={UserScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}