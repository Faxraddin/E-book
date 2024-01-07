import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import Main from "../pages/Main";
import Intro from "../pages/Intro";
import SignUp from "../pages/Signup";

const HomeStack = createNativeStackNavigator(); 

function StackTab() {
    return(
        <HomeStack.Navigator initialRouteName="Intro">
            <HomeStack.Screen options={{headerShown:false}} name="Intro" component={Intro}/>
            <HomeStack.Screen options={{headerShown:false}} name="Main" component={Main}/>
            <HomeStack.Screen options={{headerShown:false}} name="Signup" component={SignUp}/>
        </HomeStack.Navigator>
    )
}

export default function StackMain() {
    return (   
        <SafeAreaView style={{zIndex:4,height:'100%'}}>
            <Stack.Screen options={{headerShown:false}}/>
            <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
                <StackTab/>
            </NavigationContainer>
        </SafeAreaView>
    );
}
  