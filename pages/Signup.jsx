import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { View, Text,Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // sign-up logic here
    console.log('Signing up:', email, password);
  };

  return (
    <View style={{ height: '100%', backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', display: 'flex', }}>
        <Image resizeMode='cover' style={{ width: '90%', height: 330, flex: 1 }} source={require('../public/SignUp.png')} />
        <View style={{ width: '100%', gap: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={{ borderWidth: 1, padding: 10, width: '75%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Full Name' />
          <TextInput style={{ borderWidth: 1, padding: 10, width: '75%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Email' />
          <TextInput style={{ borderWidth: 1, padding: 10, width: '75%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Password' />
          <TouchableOpacity onPress={handleSignUp} style={{borderWidth:1,borderRadius:'15%',backgroundColor:'darkblue',padding:'4%',width:'75%'}}>
              <Text style={{color:'white',fontSize:'20%',textAlign:'center'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;