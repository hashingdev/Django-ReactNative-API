import React, { useState} from 'react';
import { StyleSheet} from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import trackerApi from '../api/tracker';

const SignIn_Screen = () => {


    // const signup = ({ email, password}) => {
    //       try {
    //           const response = await trackerApi.post('./signup', { email, password})
    //           if(response) {
    //               console.log('Login Successfully')
    //           }
             
    //         }
    //       catch(err) {
    //             console.log(err)
    //       }
    //     };

   
    function signup( email, password) {
            try {
                const response = await trackerApi.post('./signup', { email, password})
                if(response) {
                  console.log('Login Successfully')
                }
             
            }
            catch(err) {
                console.log(err)
          }
        };
   
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>     
            <Spacer>
            </Spacer> 
            <Spacer>
                <Text h3>Sign In</Text>
            </Spacer>
            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            <Spacer />
            <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer>
                <Button 
                onPress={signup}
                title="LOGIN"
                />
            </Spacer>
      
        </>
    );
}

const styles = StyleSheet.create({


    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignIn_Screen;