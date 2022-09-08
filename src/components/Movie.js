import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import WelcomeLogo from '../assets/WelcomeLogo.png';

const windowWidth = Dimensions.get('window').width;

export const Movie = ({title, voteAverage, posterPath}) => {
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

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#D6D0D6',
    width: windowWidth / 2 - 15,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
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
  },
  avarageVoteContainer: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 10,
  },
  avarageVote: {
    fontSize: 15,
    fontWeight: '700',
  },
});
