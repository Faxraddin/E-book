import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Animated } from 'react-native';

import { useSelector } from 'react-redux';

import ErrorAuth from '../components/ErrorAuth';

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [errorAnimation] = useState(new Animated.Value(0));

  const firstTime = useSelector((state) => state.user.firstTime);

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate name
    if (!name) {
      formIsValid = false;
      newErrors.name = 'Name is required';
    }

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

  const handleSignUp = () => {
    if (validateForm()) {
      console.log('Signing up:', name, email, password);

      setName('');
      setEmail('');
      setPassword('');
    }
  };

  const showErrorBox = () => {
    Animated.timing(errorAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (errors.name || errors.email || errors.password) {
      showErrorBox();
    }
  }, [errors]);


  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', display: 'flex' }}>
        
        <Animated.View  style={{ opacity: errorAnimation }}>
          {errors.name && <ErrorAuth error={errors.name} />}
          {errors.email && <ErrorAuth error={errors.email} />}
          {errors.password && <ErrorAuth error={errors.password} />}
        </Animated.View>
        
        <Image resizeMode='cover' style={{ width: '95%', flex: 1 }} source={require('../public/SignUp.png')} />
        <Text style={{ fontSize: 26, fontWeight: 800 }}>Welcome to our team!</Text>
        <Text style={{ position: 'relative', top: 10, justifyContent: 'center' }}>
          Already have an account ?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ position: 'relative', top: 3, fontWeight: 600 }}>Sign in</Text>
          </TouchableOpacity>
        </Text>
        <View style={{ width: '100%', gap: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            onChangeText={(text) => setName(text)}
            style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }}
            placeholder='Full Name'
          />
          <TextInput
            onChangeText={(text) => setEmail(text)}
            style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }}
            placeholder='Email'
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }}
            placeholder='Password'
          />
          <TouchableOpacity
            onPress={handleSignUp}
            style={{ borderWidth: 1, borderRadius: 25, backgroundColor: 'darkblue', padding: '4%', width: '80%' }}>
            <Text style={{ color: 'white', fontSize: 19, textAlign: 'center' }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
