import { View,Text } from "react-native";
import React from "react";

const ErrorAuth = (props) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',width:'80%',height:'20%',padding:10,position:'absolute',backgroundColor:'red',borderWidth:1,borderRadius:40,top:0,zIndex:10,left:0}}>
        <Text>{props.error}</Text>
    </View>
  )
}
export default ErrorAuth