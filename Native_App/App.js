import { StatusBar } from 'expo-status-bar';
import React, { useEffect} from 'react';
import { StyleSheet, Text, View, Button, fetch } from 'react-native';
import SignIn_Screen from './src/Screens/SignIn_Screen'
import axios from 'axios';

export default function App() {
 
  // useEffect(async() => {
  //    await fetch('http://localhost:8000/users/')
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  //  }, []);

  const getMoviesFromApi = () => {
    axios.get('localhost:8000/users/1/')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  };
 
  return (
    <View>
      <Text>
        Hello App
      </Text>
      <Button 
      onPress={getMoviesFromApi}
      title="Hello"
      />
    </View> 
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
