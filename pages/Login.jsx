import React, { useState } from 'react';
import { View, Text,Image, TextInput, TouchableOpacity, } from 'react-native';
import { useSelector } from 'react-redux';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firstTime = useSelector((state) => state.user.firstTime)
  
    const handleSignUp = () => {
      // sign-up logic here
      console.log(firstTime)
      console.log('Signing in:', email, password);
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', display: 'flex', }}>
                <Image resizeMode='cover' style={{ width: '95%', flex: 0,marginBottom:30,flex:1}} source={require('../public/SignIn.png')} />
                <Text style={{fontSize:26,fontWeight:800}}>Welcome back!</Text>
                <Text style={{position:'relative',top:10,justifyContent:'center'}}>Still don't have an account ? <TouchableOpacity onPress={()=>(navigation.navigate('Signup'))}><Text style={{position:'relative',top:3,fontWeight:600}}>Sign Up</Text></TouchableOpacity></Text>
                <View style={{ width: '100%', gap: 20, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }} placeholder='Email' />
                <TextInput style={{ borderWidth: 1, padding: 10, width: '80%', borderRadius: 25, height: '13%', fontSize: 16 }} placeholder='Password' />
                <TouchableOpacity onPress={handleSignUp} style={{borderWidth:1,borderRadius:25,backgroundColor:'darkblue',padding:'4%',width:'80%'}}>
                    <Text style={{color:'white',fontSize:19,textAlign:'center'}}>Sign In</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Login