import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import WelcomeLogo from '../assets/WelcomeLogo.png';
import {CustomButton} from '../components/CustomButton';
import {useGetsyncStorageValue} from '../hooks/getAsyncStorageValue';

export const Welcome = ({navigation}) => {
  const asyncStorageValue = useGetsyncStorageValue('registeredUser');
  useEffect(() => {
    if (asyncStorageValue?.length > 0) {
      return navigation.navigate('MainScreens', {screen: 'Home'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asyncStorageValue]);
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
            onPress={() => navigation.navigate('SignUp')}
          />
          <CustomButton
            title={'Sign In'}
            buttonContainerStyle={styles.buttonContainer}
            buttonTextStyle={styles.buttonText}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F6DCA0',
  },
});
