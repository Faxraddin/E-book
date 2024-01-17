import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Library from "../pages/Library";
import OpenBook from "../pages/OpenBook";
import ReadBook from "../pages/ReadBook";

const LibrarySlack = createNativeStackNavigator();

export default function LibraryStack(){
    return(
        <NavigationContainer style={{zIndex:4,height:'100%'}} independent={true}>
            <LibrarySlack.Navigator>

                <LibrarySlack.Screen options={{headerShown:false}} name="Library" component={Library}/>
                <LibrarySlack.Screen options={{headerShown:false}} name="OpenBook" component={OpenBook}/>
                <LibrarySlack.Screen options={{headerShown:false}} name="ReadBook" component={ReadBook}/>

            </LibrarySlack.Navigator>
        </NavigationContainer>
    )
}