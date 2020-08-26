import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button,FlatList, fetch } from 'react-native';
import SignIn_Screen from './src/Screens/SignIn_Screen'
import axios from 'axios';

export default function App() {
 
  // useEffect(async() => {
  
  //  }, []);
  
  const [obj, setObj] = useState();
  const getMoviesFromApi = () => {
    axios.get('http://582dc390bf6f.ngrok.io/users/')
    .then(function (response) {
      // handle success
   //   console.log(response.data.results[0]);
      setObj(response.data.results);
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  };
 
  console.log(obj)
  return (
    <View style={{ marginTop: '20%', marginBottom: '10%'}}>
      <Text style={{ color:"blue", fontSize: 30, fontWeight:'bold'}}>
        Django App
      </Text>
      <FlatList
                data={obj}
                keyExtractor = { (item, index) => index.toString() }
                renderItem= {({item}) => {
                return ( 
                    <View>
                        <Text style={{ fontSize: 20}}>
                          Email Address: {item.email} {"\n"}
                          Name : {item.username}
                          {"\n"}
                          
                          UserURL:<Text style={{ color: 'blue'}}> {item.url} </Text>
                          {"\n"}
                        </Text>
                    </View>
                );
              }}
            />
      <View style={{ marginTop: '20%'}}>
        <Button 
          onPress={getMoviesFromApi}
          title="I Need user Info"
        />
      </View>
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
