import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

import { useDispatch } from "react-redux";
import { setFirstTime } from "../redux/setUser";

const Intro = ({navigation}) => {
  const dispatch = useDispatch();

  const handleContinue = async () => {
    navigation.navigate('TabsBottom');
    dispatch(setFirstTime(true));
  }

  return (
        <SafeAreaView style={{ flex: 1, zIndex: 4 }}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "80%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../public/5.png")}
                style={{ width: "80%", height: "50%" }}
                resizeMode="cover"
              />
              <View
                style={{
                  flex: 1,
                  gap: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, fontWeight: 900 }}>
                  Start your
                </Text>
                <Text style={{ fontSize: 28, fontWeight: 900 }}>
                  Journey with Books
                </Text>
                <Text style={{ fontSize: 20, fontWeight: 300 }}>
                  Let's get you started
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: "80%",
                  backgroundColor: "darkblue",
                  padding: 14,
                  borderWidth: 1,
                  borderRadius: 30,
                }}
                onPress={handleContinue}
              >
                <Text
                  style={{ textAlign: "center", fontSize: 18, color: "white" }}
                >
                  Here you go!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
  );
};

export default Intro;
