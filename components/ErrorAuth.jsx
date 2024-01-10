import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

const ErrorAuth = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 900, 
          useNativeDriver: true,
        }).start();
  
        const timeout = setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 900,
            useNativeDriver: true,
          }).start();
        }, 2000);
  
        return () => clearTimeout(timeout);
      }, [fadeAnim]);
  
    return (
      <Animated.View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          height: "20%",
          padding: 10,
          position: "absolute",
          backgroundColor: "#C31717",
          borderWidth: 1,
          borderRadius: 40,
          top: 0,
          zIndex: 10,
          opacity: fadeAnim,
        }}
      >
        <Text style={{fontSize:19,color:'white'}}>{props.error}</Text>
      </Animated.View>
    );
  };
  
  export default ErrorAuth;
  