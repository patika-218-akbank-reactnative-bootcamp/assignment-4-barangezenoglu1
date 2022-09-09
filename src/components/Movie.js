import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

export const Movie = ({title, voteAverage, posterPath}) => {
  const themeColors = useSelector(state => state.theme);
  const styles = StyleSheet.create({
    // Styles in component because we use global state data.
    container: {
      position: 'relative',
      backgroundColor: '#D6D0D6',
      width: windowWidth / 2 - 15,
      marginRight: 10,
      marginTop: 10,
      borderRadius: 10,
      height: 400,
    },
    posterContainer: {
      alignItems: 'center',
    },
    poster: {
      marginTop: 10,
      width: windowWidth / 2 - 40,
      height: 300,
      borderRadius: 10,
    },
    textContainer: {
      marginTop: 10,
      marginLeft: 15,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: themeColors.theme.black,
    },
    avarageVoteContainer: {
      marginTop: 10,
      marginLeft: 15,
      marginBottom: 10,
    },
    avarageVote: {
      fontSize: 15,
      fontWeight: '700',
      color: themeColors.theme.black,
    },
  });

  return (
    <View style={title ? styles.container : ''}>
      <View style={styles.posterContainer}>
        <Image
          source={{
            uri: posterPath,
          }}
          style={styles.poster}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
      </View>
      <View style={styles.avarageVoteContainer}>
        <Text style={styles.avarageVote}>
          {title ? 'Avarage Vote:' : ''} {voteAverage}
        </Text>
      </View>
    </View>
  );
};
