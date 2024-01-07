import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState,React} from "react";

import Main from "../pages/Main";
import Intro from "../pages/Intro";
import SignUp from "../pages/Signup";

const HomeStack = createNativeStackNavigator(); 

export default function StackMain() {
    const [intro,setIntro] = useState(true)

    return (   
        <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
            <HomeStack.Navigator initialRouteName={`${intro ? 'Intro' : 'Main'}`}>
                <HomeStack.Screen  options={{ headerShown: false }} name="Intro" component={Intro}/>
                <HomeStack.Screen  options={{ headerShown: false }} name="Main" component={Main}/>
                <HomeStack.Screen  options={{ headerShown: true,headerTitle:'',headerBackVisible:false,headerStyle:{backgroundColor:'white'},headerShadowVisible:false }} name="Signup" component={SignUp}/>
            </HomeStack.Navigator>
        </NavigationContainer>
    );
}