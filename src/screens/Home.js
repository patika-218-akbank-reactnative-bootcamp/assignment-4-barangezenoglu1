import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ActiveUserContext} from '../context/ActiveUserContext';

export const Home = () => {
  const {activeUser} = useContext(ActiveUserContext);
  console.log('activeUser', activeUser);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
