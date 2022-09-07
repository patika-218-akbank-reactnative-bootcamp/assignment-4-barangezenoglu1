import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import Login from '../assets/Login.png';
import {CustomButton} from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignIn = ({navigation}) => {
  /* const {setActiveUser} = useContext(ActiveUserContext); */
  const [registeredUsers, setRegisteredUsers] = useState(null);
  const [loggedUser, setLoggedUser] = useState({
    userName: '',
    userPassword: '',
  });
  const registeredUser = registeredUsers?.filter(
    user =>
      user.userName === loggedUser.userName &&
      user.userPassword === loggedUser.userPassword,
  );
  const setUserAsyncStorage = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('registeredUser', jsonValue);
    } catch (e) {
      // save error
    }
  };
  const handleLogIn = () => {
    /*  setActiveUser(registeredUser); */
    navigation.navigate('Home');
    setUserAsyncStorage(registeredUser);
  };
  useEffect(() => {
    axios.get('http://10.0.2.2:3000/registeredUsers').then(response => {
      setRegisteredUsers(response.data);
    });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackGround: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputWrapper: {
      width: 400,
      backgroundColor: 'rgba(55, 54, 54, 0.8)',
    },
    loginTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      padding: 20,
    },
    inputsContainer: {
      padding: 10,
    },
    input: {
      width: 380,
      height: 60,
      backgroundColor: 'rgba(216, 211, 211, 0.2)',
      padding: 20,
      marginBottom: 30,
      fontSize: 20,
    },
    buttonContainer: {
      height: 50,
      width: 150,
      backgroundColor:
        registeredUser?.length > 0
          ? 'rgba(223, 5, 5, 0.8)'
          : 'rgba(131, 131, 131 , 0.8)',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      margin: 10,
      marginLeft: 120,
    },
    buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#F6DCA0',
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Login}
        style={styles.imageBackGround}
        resizeMode="cover">
        <View style={styles.inputWrapper}>
          <Text style={styles.loginTitle}>Login</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder={'User Name'}
              placeholderTextColor="grey"
              secureTextEntry={true}
              value={loggedUser.userName}
              onChangeText={text =>
                setLoggedUser({...loggedUser, userName: text})
              }
            />
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              placeholderTextColor="grey"
              secureTextEntry={true}
              value={loggedUser.userPassword}
              onChangeText={text =>
                setLoggedUser({...loggedUser, userPassword: text})
              }
            />
            <CustomButton
              title={'Sign In'}
              buttonContainerStyle={styles.buttonContainer}
              buttonTextStyle={styles.buttonText}
              isDisabled={registeredUser?.length !== 1}
              onPress={handleLogIn}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
