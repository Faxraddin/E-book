import { View,Text,ScrollView,TextInput } from "react-native";
import ExploreBox from "../components/ExploreBox";

const Explore = () => {
  return (
    <View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white',width:'100%'}}>
        <View style={{width:'88%',gap:0,flex:1,position:'relative',top:'8%',gap:20,paddingBottom:'22%'}}>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{gap:20,flex:1,justifyContent:'space-between'}}>
              <TextInput style={{borderWidth:1,padding:15,borderRadius:15}} placeholder="hhsd"/>    
              <View>
                <Text>Popular Here</Text>
                <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between'}}>
                  <ExploreBox />
                  <ExploreBox />
                  <ExploreBox />
                  <ExploreBox />
                  <ExploreBox />
                  <ExploreBox />
                  <ExploreBox />
                </View>
              </View>
            </View>
          </ScrollView>

        </View>
    </View>
  )
}
export default Explore