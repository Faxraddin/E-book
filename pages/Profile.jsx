import React from "react";
import { useState } from "react"
import { View,Text,ScrollView,Image,TouchableOpacity,TextInput } from "react-native"

import { AntDesign } from '@expo/vector-icons';

import ProfileCategories from "../components/ProfileCategories";
import ProfileLibrary from "../components/ProfileLibrary";

const Profile = () => {

    const [library,setLibrary] = useState(false)

    return (
      <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'100%'}}>
          <View style={{width:'88%',gap:0,flex:1,position:'relative',top:'18%',gap:20,paddingBottom:'22%'}}>

            <ScrollView>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:24}}>

                <Image style={{width:127,height:127,}} source={require('../public/Icon.png')}/>
                <Text style={{fontSize:25,fontWeight:900}}>Faxraddin</Text>
                <View style={{flexDirection:'row',gap:15}}>
                  <Text style={{fontSize:16,fontWeight:600}}>0 followers</Text>
                  <Text style={{fontSize:16,fontWeight:600}}>0 following</Text>
                </View>
                <View style={{borderWidth:1,borderRadius:30,padding:17,backgroundColor:'gray',width:'40%'}}>
                  <Text style={{fontSize:16,fontWeight:600,color:'white',textAlign:'center'}}>Edit profile</Text>
                </View>
                <View style={{flexDirection:'row',gap:15}}>
                  <View style={{ gap: 15,flexDirection:'row' }}>
                    <TouchableOpacity onPress={()=>(setLibrary(false))} style={{ borderBottomWidth:  library ? 0:4, borderBottomColor: 'black',borderRadius:2 }}>
                      <Text style={{ fontSize: 17, fontWeight: '800',}}> Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>(setLibrary(true))} style={{ borderBottomWidth: library ? 4:0, borderBottomColor: 'black',borderRadius:2 }}>
                      <Text style={{ fontSize: 17, fontWeight: '800', borderBottomWidth: 2, borderBottomColor: 'black' }}>
                        Categories
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection:'row',gap:15,alignItems:'center',justifyContent:'space-between'}}>
                  <TextInput style={{borderWidth:1,padding:13,borderRadius:15,width:'80%'}} placeholder="hhsd"/>    
                  <AntDesign name="addfile" size={28} color="black" />
                </View>
                <View>
                  <ProfileCategories/>
                  <ProfileLibrary/>
                </View>

              </View>
            </ScrollView>
            
          </View>
      </View>
    )
}
export default Profile