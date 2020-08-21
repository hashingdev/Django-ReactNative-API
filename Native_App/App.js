import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn_Screen from './src/Screens/SignIn_Screen'

export default function App() {
  // axios({
  //   method: 'post',
  //   url: '/user/12345',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });
  return (
   <SignIn_Screen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
