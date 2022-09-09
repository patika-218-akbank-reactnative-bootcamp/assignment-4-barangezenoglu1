import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import Login from '../assets/Login.png';
import {CustomButton} from '../components/CustomButton';
export const SignUp = ({navigation}) => {
  const [enteredUser, setEnteredUser] = useState({
    enteredUserMail: '',
    enteredUserName: '',
    enteredUserPassword: '',
  });
  const [enteredPasswordAgain, setEnteredPasswordAgain] = useState('');
  const [registerInfo, setRegisterInfo] = useState({
    userMail: '',
    userName: '',
    userPassword: '',
  });
  const isUserEmpty = obj => {
    if (obj === null) {
      return true;
    } else if (enteredPasswordAgain !== enteredUser.enteredUserPassword) {
      return true;
    } else {
      return !Object.values(obj).every(element => element !== '');
    }
  };
  const setUserAsyncStorage = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('registeredUser', jsonValue);
    } catch (e) {
      // save error
    }
  };
  const handleButtonSubmit = () => {
    setRegisterInfo({
      userMail: enteredUser.enteredUserMail,
      userName: enteredUser.enteredUserName,
      userPassword: enteredUser.enteredUserPassword,
    });
    axios.post('http://10.0.2.2:3000/registeredUsers', registerInfo);
    setRegisterInfo({
      userMail: '',
      userName: '',
      userPassword: '',
    });
    setEnteredUser({
      enteredUserMail: '',
      enteredUserName: '',
      enteredUserPassword: '',
    });
    setUserAsyncStorage(registerInfo);
    navigation.navigate('MainScreens', {screen: 'Home'});
  };
  useEffect(() => {
    setRegisterInfo(enteredUser);
  }, [enteredUser]);
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
      backgroundColor: isUserEmpty(registerInfo)
        ? 'rgba(131, 131, 131 , 0.8)'
        : 'rgba(223, 5, 5, 0.8)',
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
          <Text style={styles.loginTitle}>Register</Text>
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor="grey"
              value={enteredUser.enteredUserMail}
              onChangeText={text =>
                setEnteredUser({...enteredUser, enteredUserMail: text})
              }
            />
            <TextInput
              style={styles.input}
              placeholder={'User Name'}
              placeholderTextColor="grey"
              value={enteredUser.enteredUserName}
              onChangeText={text =>
                setEnteredUser({...enteredUser, enteredUserName: text})
              }
            />
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              placeholderTextColor="grey"
              secureTextEntry={true}
              value={enteredUser.enteredUserPassword}
              onChangeText={text =>
                setEnteredUser({...enteredUser, enteredUserPassword: text})
              }
            />
            <TextInput
              style={styles.input}
              placeholder={'Password Again'}
              placeholderTextColor="grey"
              secureTextEntry={true}
              value={enteredPasswordAgain}
              onChangeText={text => setEnteredPasswordAgain(text)}
            />
            <CustomButton
              title={'Sign Up'}
              buttonContainerStyle={styles.buttonContainer}
              buttonTextStyle={styles.buttonText}
              onPress={handleButtonSubmit}
              isDisabled={isUserEmpty(registerInfo)}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
