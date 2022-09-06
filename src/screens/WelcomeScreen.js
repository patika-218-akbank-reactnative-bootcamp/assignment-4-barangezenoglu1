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

export const Welcome = ({navigation}) => {
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
      {/*   <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
      </NavigationContainer> */}
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
