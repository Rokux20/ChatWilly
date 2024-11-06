import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, StyleSheet, Image, Alert } from 'react-native';
import icon from '../assets/Logo.jpeg';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');


  const handleLogin = () => {

    if (phone.trim() === '') {
        Alert.alert('Error', 'El campo de teléfono no puede estar vacío.');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.logo} />
      <Text style={styles.loginText}>Login</Text>

      <TouchableHighlight style={styles.countrySelector} underlayColor="#2a4a86" onPress={() => {}}>
        <Text style={styles.countryText}>🇨🇴 Colombia</Text>
      </TouchableHighlight>

      <TextInput
        style={styles.phoneInput}
        placeholder="+57"
        keyboardType="phone-pad"
        placeholderTextColor="#fff"
        value={phone} 
        onChangeText={setPhone} 
      />

      <TouchableHighlight style={styles.loginButton} underlayColor="#ddd" onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight style={styles.signupButton} underlayColor="#2a4a86" onPress={() => {}}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c2b3a',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  countrySelector: {
    width: '100%',
    backgroundColor: '#3366cc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  countryText: {
    color: '#fff',
    fontSize: 16,
  },
  phoneInput: {
    width: '100%',
    backgroundColor: '#3366cc',
    padding: 15,
    borderRadius: 10,
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#1c2b3a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#3366cc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
