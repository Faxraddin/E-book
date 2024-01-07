import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // sign-up logic here
    console.log('Signing up:', email, password);
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', display: 'flex', }}>
        <Image resizeMode='cover' style={{ width: '90%', height: 330, flex: 1 }} source={require('../public/SignUp.png')} />
        <Text style={{fontSize:26,fontWeight:800}}>Welcome to our team!</Text>
        <View style={{ width: '100%', gap: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Full Name' />
          <TextInput style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Email' />
          <TextInput style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 10, height: '13%', fontSize: 16 }} placeholder='Password' />
          <TouchableOpacity onPress={handleSignUp} style={{borderWidth:1,borderRadius:'15%',backgroundColor:'darkblue',padding:'4%',width:'80%'}}>
              <Text style={{color:'white',fontSize:19,textAlign:'center'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;