import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, } from 'react-native';
import { useSelector } from 'react-redux';

import ErrorAuth from '../components/ErrorAuth';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const firstTime = useSelector((state) => state.user.firstTime)
  
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    //Validate email
    if (!email.trim()) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Invalid email address';
    }

    // Validate password
    if (!password.trim()) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    } else if (password.length < 5) {
      formIsValid = false;
      newErrors.password = 'Password must be at least 5 characters';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      console.log('Signing up:', email, password);

      setEmail('');
      setPassword('');
    }
  };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', display: 'flex', }}>

                {errors.email && <ErrorAuth error={errors.email} />}
                {errors.password && <ErrorAuth error={errors.password} />}

                <Image resizeMode='cover' style={{ width: '95%', flex: 0,marginBottom:30,flex:1}} source={require('../public/SignIn.png')} />
                <Text style={{fontSize:26,fontWeight:800}}>Welcome back!</Text>
                <Text style={{position:'relative',top:10,justifyContent:'center'}}>Still don't have an account ? <TouchableOpacity onPress={()=>(navigation.navigate('Signup'))}><Text style={{position:'relative',top:3,fontWeight:600}}>Sign Up</Text></TouchableOpacity></Text>
                <View style={{ width: '100%', gap: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput onChangeText={(text) => setEmail(text)} style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }} placeholder='Email' />
                <TextInput onChangeText={(text) => setPassword(text)} style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }} placeholder='Password' />
                <TouchableOpacity onPress={handleSignIn} style={{borderWidth:1,borderRadius:25,backgroundColor:'darkblue',padding:'4%',width:'80%'}}>
                    <Text style={{color:'white',fontSize:19,textAlign:'center'}}>Sign In</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Login