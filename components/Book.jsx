import React from "react";
import { View,Text,Image,TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { setBookImg, setBookText, setBookTitle } from "../redux/setBook";

const Book = (props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(setBookImg(require('../public/Book1.jpg')));
    dispatch(setBookText('upon a rOnce upon a river rOnce upon a riverOnce upon a riverOnce upon a rivervvvvvvvvvOnce upon a riverOnce upon a riverOnce upon a riverOnce upon a riverOnce upon a riverOnce upon a riverOnce upon a riveriverOnce upon a riverOnce upon a riverOnce upon a riverOnce upon a riverce upon a river'));
    dispatch(setBookTitle('Once upon a river'))

    props.navigation.navigate("OpenBook");
  }

  return (
    <TouchableOpacity onPress={handleClick}>
        <View style={{gap:10}}>
            <Image style={{width:130,height:200,objectFit:'contain',borderWidth:1,borderRadius:10}} source={require('../public/Book1.jpg')}/>
            <Text style={{fontSize:16,fontWeight:400}}>Once upon a river</Text>
        </View>
    </TouchableOpacity>
  )
}
export default Book