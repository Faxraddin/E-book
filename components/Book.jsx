import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";

const Book = () => {
  return (
    <TouchableOpacity>
        <View style={{gap:10}}>
            <Image style={{width:130,height:200,objectFit:'contain',borderWidth:1,borderRadius:10}} source={require('../public/Book1.jpg')}/>
            <Text style={{fontSize:16,fontWeight:400}}>Once upon a river</Text>
        </View>
    </TouchableOpacity>
  )
}
export default Book