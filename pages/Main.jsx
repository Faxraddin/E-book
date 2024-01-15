import React from "react";
import { View,Text,Image,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from '@expo/vector-icons';

const Main = () => {
    const categoryWidth = 75 + 10;
    const categoryWidth2 = 270 + 10;

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <View style={{width:'88%',gap:0,flex:1,position:'relative',top:'8%',gap:20}}>
              
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{gap:30}}>
                  <View style={{width:'100%',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                      <Ionicons name="settings-outline" size={34} color="black" />
                      <Image style={{width:47,height:47,}} source={require('../public/Icon.png')}/>
                  </View>

                  <View style={{width:'100%',height:'auto'}}>
                      <LinearGradient
                        colors={['#3c42d8', '#7545fa']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{width:'100%',height:'auto',borderWidth:1,borderRadius:25,paddingTop:35,justifyContent:'center',alignItems:'center',gap:20,paddingBottom:20}}
                      >
                        <Text style={{color:'white',fontSize:26,width:'50%',textAlign:'center',fontWeight:700}}>Find a best book for you</Text>
                        <View style={{backgroundColor:'#ff999d',width:'90%',height:'auto',padding:15,borderWidth:1,borderRadius:15,flexDirection:'row',gap:19}}>
                          <Image style={{width:44,height:40}} source={require('../public/BookIcon.png')}/>
                          <View style={{gap:5}}>
                            <Text style={{fontSize:15,fontWeight:700}}>Adventure</Text>
                            <Text>Continue reading</Text>
                          </View>
                        </View>
                      </LinearGradient>
                  </View>

                  <View style={{gap:10}}>
                      <Text style={{fontSize:23,fontWeight:500}}>Categories</Text>
                      <ScrollView horizontal={true} style={{gap:20,display:'flex',}} snapToInterval={categoryWidth} decelerationRate="fast" showsHorizontalScrollIndicator={false}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',gap:15}}>
                          <View style={{alignItems:'center',gap:10,}}>
                            <Image style={{width:75,height:75}} source={require('../public/Icon1.png')}/>
                            <Text style={{color:'gray'}}>Finance</Text>
                          </View>
                          <View style={{alignItems:'center',gap:10}}>
                            <Image style={{width:75,height:75}} source={require('../public/Icon2.png')}/>
                            <Text style={{color:'gray'}}>Health</Text>
                          </View>
                          <View style={{alignItems:'center',gap:10}}>
                            <Image style={{width:75,height:75}} source={require('../public/Icon3.png')}/>
                            <Text style={{color:'gray'}}>Bussiness</Text>
                          </View>
                          <View style={{alignItems:'center',gap:10,}}>
                            <Image style={{width:75,height:75}} source={require('../public/Icon4.png')}/>
                            <Text style={{color:'gray'}}>Travel</Text>
                          </View>
                          <View style={{alignItems:'center',gap:10}}>
                            <Image style={{width:75,height:75}} source={require('../public/Icon1.png')}/>
                            <Text style={{color:'gray'}}>Finance</Text>
                          </View>
                        </View>
                      </ScrollView>
                  </View>

                  <View style={{gap:20}}>
                    <Text style={{fontSize:23,fontWeight:500}}>Most Popular</Text>
                    <ScrollView  horizontal={true} style={{gap:20,display:'flex',}} snapToInterval={categoryWidth2} decelerationRate="fast" showsHorizontalScrollIndicator={false}>
                      <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',gap:15}}>
                        <View style={{width:270,height:'100%',gap:10}}>
                          <Image style={{width:'100%',height:120,objectFit:'cover',borderWidth:1,borderRadius:20}} source={require('../public/Popular1.jpg')}/>
                          <Text style={{fontWeight:600,fontSize:16}}>Books Are Tresuares 2022</Text>
                          <Text style={{color:'gray'}}>By Awan Seto Setifon</Text>
                        </View>
                        <View style={{width:270,height:'100%',gap:10}}>
                          <Image style={{width:'100%',height:120,objectFit:'cover',borderWidth:1,borderRadius:20}} source={require('../public/Popular2.png')}/>
                          <Text style={{fontWeight:600,fontSize:16}}>Books Are Tresuares 2022</Text>
                          <Text style={{color:'gray'}}>By Awan Seto Setifon</Text>
                        </View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </ScrollView>
              
            </View>
        </View>
    )
}
export default Main