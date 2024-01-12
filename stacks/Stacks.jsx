import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,React} from "react";

import TabsBottom from "./Tabs";

import Main from "../pages/Main";
import Intro from "../pages/Intro";

import SignUp from "../pages/Signup";
import Login from "../pages/Login";

const HomeStack = createNativeStackNavigator(); 

import { useSelector} from "react-redux";

export default function StackMain() {
    const infoFirstTime = useSelector((state) => state.user.firstTime);

    const [intro,setIntro] = useState(true)

    return (   
        <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
            <HomeStack.Navigator initialRouteName={`${infoFirstTime ? 'Intro' : 'Main'}`}>
                <HomeStack.Screen  options={{ headerShown: false }} name="Intro" component={Intro}/>
                <HomeStack.Screen  options={{ headerShown: false }} name="TabsBottom" component={TabsBottom}/>
                
                <HomeStack.Screen  options={{ headerShown: true,headerTitle:'',headerBackVisible:false,headerStyle:{backgroundColor:'white'},headerShadowVisible:false }} name="Signup" component={SignUp}/>
                <HomeStack.Screen  options={{ headerShown: true,headerTitle:'',headerBackVisible:false,headerStyle:{backgroundColor:'white'},headerShadowVisible:false }} name="Login" component={Login}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}