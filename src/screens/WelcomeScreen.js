import React from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WelcomeLogo from '../assets/WelcomeLogo.png';
import {CustomButton} from '../components/CustomButton';

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={WelcomeLogo}
        resizeMode="cover"
        style={styles.imageBackGround}>
        <View style={styles.loginContainer}>
          <CustomButton
            title={'Sign Up'}
            buttonContainerStyle={styles.buttonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={() => console.log('Pressed Sign up')}
          />
          <CustomButton
            title={'Sign In'}
            buttonContainerStyle={styles.buttonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={() => console.log('Pressed Sign In')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageBackGround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    top: 230,
    flexDirection: 'row',
  },
  buttonContainer: {
    height: 50,
    width: 150,
    backgroundColor: 'rgba(247, 167, 44, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F6DCA0',
  },
});
