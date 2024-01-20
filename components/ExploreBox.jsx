import React from "react";
import { View, Text, ImageBackground } from "react-native";

const ExploreBox = () => {
  const img = require('../public/Fantasy.png');

  return (
    <View style={{ width: '48.5%', height: 100, overflow: 'hidden', borderRadius: 20,marginBottom:5,marginTop:5 }}>
      <ImageBackground style={{ width: '100%', flex: 1 }} resizeMode="cover" source={img}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text style={{ color: 'white', fontSize: 19 }}>Fantasy</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ExploreBox;
