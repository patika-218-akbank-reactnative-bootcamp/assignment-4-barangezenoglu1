import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Welcome} from './src/screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from './src/screens/SignUp';
import {SignIn} from './src/screens/SignIn';
import {Home} from './src/screens/Home';
import {ActiveUserProvider} from './src/context/ActiveUserProvider';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <ActiveUserProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        </ActiveUserProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
