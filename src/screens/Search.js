import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export const Search = () => {
  const currentMovie = useSelector(state => state.movies);
  console.log('currentMovie', currentMovie);
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
