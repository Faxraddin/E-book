import { View,Text,Image,TouchableOpacity } from "react-native"
import { useSelector } from "react-redux";

import { Ionicons } from '@expo/vector-icons';

const OpenBook = ({navigation}) => {
  const bookImg = useSelector(state => state.book.bookImg);
  const bookTitle = useSelector(state => state.book.bookTitle);
  const bookText = useSelector(state => state.book.bookText);

  return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center',width:'100%'}}>
          <View style={{flex:1,width:'100%'}}>

            <TouchableOpacity onPress={()=>(navigation.navigate('Library'))} style={{position:'absolute',zIndex:5,top:50,left:20}}>
              <Ionicons name="return-up-back" size={40} color="white" />
            </TouchableOpacity>
            <Image style={{height:'60%',width:'100%'}} source={bookImg}/>
            <View style={{height:'60%',backgroundColor:'white',width:'100%',justifyContent:'center',alignItems:'center',borderW:1,borderRadius:30,position:'relative',top:'-10%'}}>
              <View style={{width:'100%',flex:1,padding:40,gap:15}}>
                <Text style={{fontSize:25,fontWeight:600}}>{bookTitle}</Text>
                <Text style={{fontSize:18,fontWeight:300,color:'gray'}}>By Antonella</Text>
                <Text style={{fontSize:19,fontWeight:600,}}>About the book</Text>
                <Text style={{fontSize:18,fontWeight:300,color:'gray'}}>{bookText}</Text>
                <TouchableOpacity style={{backgroundColor:'#1a60e6',padding:15,borderW:1,borderRadius:20}}>
                  <Text style={{textAlign:'center',fontSize:21,color:'white'}}>Read Now</Text>
                </TouchableOpacity>
              </View>
            </View>

          </View>
      </View>
    )
}

export default OpenBook