import { View,Text,TextInput,ScrollView } from "react-native"

import Book from "../components/Book";

const Library = ({navigation}) => {
    const categoryWidth1 = 130 + 10;
  return (
    <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'100%'}}>
        <View style={{width:'88%',gap:0,flex:1,position:'relative',top:'8%',gap:20,paddingBottom:'22%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
               <View style={{gap:20,flex:1,justifyContent:'space-between'}}>
                    <TextInput style={{borderWidth:1,padding:15,borderRadius:15}} placeholder="hhsd"/>    
                    <View style={{gap:20}}>
                        <Text style={{fontSize:24,fontWeight:700}}>New Books</Text>
                        <ScrollView  snapToInterval={categoryWidth1} decelerationRate="fast" showsHorizontalScrollIndicator={false} horizontal={true}>
                            <View style={{flexDirection:'row',gap:20}}>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                            </View>
                        </ScrollView>
                    </View>            

                    <View style={{gap:20}}>
                        <Text style={{fontSize:24,fontWeight:700}}>Your books</Text>
                        <ScrollView  snapToInterval={categoryWidth1} decelerationRate="fast" showsHorizontalScrollIndicator={false} horizontal={true}>
                            <View style={{flexDirection:'row',gap:20}}>
                            <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                            </View>
                        </ScrollView>
                    </View>     

                    <View style={{gap:20}}>
                        <Text style={{fontSize:24,fontWeight:700}}>Recommended</Text>
                        <ScrollView  snapToInterval={categoryWidth1} decelerationRate="fast" showsHorizontalScrollIndicator={false} horizontal={true}>
                            <View style={{flexDirection:'row',gap:20}}>
                            <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                                <Book navigation={navigation}/>
                            </View>
                        </ScrollView>
                    </View>          
               </View>
            </ScrollView> 
        </View>
    </View>
  )
}
export default Library