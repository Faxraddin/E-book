import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../pages/Main";
import Profile from '../pages/Profile';
import Settings  from "../pages/Settings";

const mainStack = createNativeStackNavigator();

export default function MainStack(){
    return(
        <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
            <mainStack.Navigator initialRouteName="Main">
                <mainStack.Screen options={{headerShown:false}} name="Main" component={Main}/>
                <mainStack.Screen options={{headerShown:false}} name="Profile" component={Profile}/>
                <mainStack.Screen options={{headerShown:false}} name="Settings" component={Settings}/>
            </mainStack.Navigator>
        </NavigationContainer>
    )
}