import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

import Main from "../pages/Main";
import LibraryStack from "./LibrarySlack";

const Tab = createBottomTabNavigator();

function Tabs () {
    return (
        <Tab.Navigator
          screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
              let iconName;
              let iconColor;
    
              if (route.name === 'Home') {
                focused ? iconColor='#6d40f5':iconColor='gray'
                return <Ionicons name={'home-outline'} size={size+2} color={iconColor} />;
              } else if (route.name === 'Library') {
                focused ? iconColor='#6d40f5':iconColor='gray'
                return <Ionicons name={"library-outline"} size={size} color={iconColor} />
              } else if (route.name === 'Profile') {
                focused ? iconColor='#6d40f5':iconColor='gray';
                return <EvilIcons name={"user"} size={size+13} color={iconColor} />
              }
            },
            headerShown: false,
            tabBarStyle:{
                backgroundColor:'white',
                borderTopWidth:0,
                
            },
            tabBarActiveTintColor: '#6d40f5', 
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
                fontSize: 11, 
            },
          })}
          
        >
          <Tab.Screen name="Home" component={Main} />
          <Tab.Screen name="Library" component={LibraryStack} />
          <Tab.Screen name="Profile" component={Main} />
        </Tab.Navigator>
      );
};

export default function TabsBottom() {
    return (
        <NavigationContainer style={{ zIndex: 4, height: '100%' }} independent={true}>
          <Tabs />
        </NavigationContainer>
      );
}
