import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Welcome} from './src/screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SignUp} from './src/screens/SignUp';
import {SignIn} from './src/screens/SignIn';
import {Home} from './src/screens/Home';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Search} from './src/screens/Search';
import {Profile} from './src/screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MovieDetail} from './src/screens/MovieDetail';
Ionicons.loadFont();
const MainScreens = () => {
  const loadIcons = route => {
    if (route.name === 'Home') {
      return <Ionicons name="md-home-outline" size={30} color={'black'} />;
    } else if (route.name === 'Search') {
      return <Ionicons name="search-outline" size={30} color={'black'} />;
    } else if (route.name === 'Profile') {
      return <Ionicons name="settings-outline" size={30} color={'black'} />;
    }
  };
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => loadIcons(route),
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="MainScreens" component={MainScreens} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="MovieDetail" component={MovieDetail} />
          </Stack.Navigator>
        </Provider>
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
