import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export const Profile = () => {
  const activeUser = useSelector(state => state.user);
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};
