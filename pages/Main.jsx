import React from "react";
import { View,Text,Image,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Main = () => {
    const categoryWidth = 75 + 10;

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <View style={{width:'90%',gap:0,flex:1,position:'relative',top:'10%',gap:20}}>
              
              <View style={{width:'100%',justifyContent:'flex-end',flexDirection:'row',}}>
                  <Image style={{width:50,height:50,}} source={require('../public/Icon.png')}/>
              </View>

              <View style={{width:'100%',height:'auto'}}>
                  <LinearGradient
                    colors={['#3c42d8', '#7545fa']}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={{width:'100%',height:'auto',borderWidth:1,borderRadius:25,paddingTop:40,justifyContent:'center',alignItems:'center',gap:30,paddingBottom:20}}
                  >
                    <Text style={{color:'white',fontSize:30,width:'60%',textAlign:'center',fontWeight:700}}>Find a best book for you</Text>
                    <View style={{backgroundColor:'#ff999d',width:'90%',height:'auto',padding:20,borderWidth:1,borderRadius:15}}><Text>Continue to read</Text></View>
                  </LinearGradient>
              </View>

              <View style={{gap:20}}>
                  <Text style={{fontSize:23,fontWeight:500}}>Categories</Text>
                  <ScrollView horizontal={true} style={{gap:20,display:'flex',}} snapToInterval={categoryWidth} decelerationRate="fast" showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',gap:15}}>
                      <View style={{alignItems:'center',gap:10,}}>
                        <Image style={{width:75,height:75}} source={require('../public/Category.png')}/>
                        <Text>Finance</Text>
                      </View>
                      <View style={{alignItems:'center',gap:10}}>
                        <Image style={{width:75,height:75}} source={require('../public/Category.png')}/>
                        <Text>Finance</Text>
                      </View>
                      <View style={{alignItems:'center',gap:10}}>
                        <Image style={{width:75,height:75}} source={require('../public/Category.png')}/>
                        <Text>Finance</Text>
                      </View>
                      <View style={{alignItems:'center',gap:10,}}>
                        <Image style={{width:75,height:75}} source={require('../public/Category.png')}/>
                        <Text>Finance</Text>
                      </View>
                      <View style={{alignItems:'center',gap:10}}>
                        <Image style={{width:75,height:75}} source={require('../public/Category.png')}/>
                        <Text>Finance</Text>
                      </View>
                    </View>
                  </ScrollView>
              </View>

              <View>
                
              </View>
              
            </View>
        </View>
    )
}
export default Main