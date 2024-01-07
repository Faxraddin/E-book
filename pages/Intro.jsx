import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../redux/store";

const persistor = persistStore(store);

const Intro = ({navigation}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ flex: 1, zIndex: 4 }}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
          />
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
                  borderRadius: "50%",
                }}
                onPress={()=>{navigation.navigate('Signup')}}
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
      </PersistGate>
    </Provider>
  );
};

export default Intro;
