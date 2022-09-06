import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Welcome} from './src/screens/WelcomeScreen';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
