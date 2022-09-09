import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MoviesList} from '../components/MoviesList';

export const Search = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const themeColors = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: themeColors.theme.white,
    },
    searchMovie: {
      marginTop: 20,
      height: 50,
      backgroundColor: 'rgba(55, 54, 54, 0.5)',
    },
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchMovie}
        placeholder="Search movie..."
        onChangeText={text => {
          setSearchInput(text);
        }}
      />
      <MoviesList
        navigation={navigation}
        type={'search'}
        input={searchInput.length > 0 ? searchInput : ''}
      />
    </View>
  );
};
