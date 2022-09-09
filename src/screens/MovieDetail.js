import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {DetailBlock} from '../components/DetailBlock';

const windowHeight = Dimensions.get('window').height;
export const MovieDetail = ({route}) => {
  const themeColors = useSelector(state => state.theme);
  const {movie} = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: themeColors.theme.white,
    },
    posterContainer: {
      height: windowHeight,
      width: '35%',
      paddingTop: 50,
      alignItems: 'center',
    },
    detailContainer: {
      height: windowHeight,
      width: '65%',
      paddingTop: 50,
      paddingLeft: 15,
    },
    poster: {
      width: '100%',
      height: windowHeight / 1.2,
    },
    detailTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomWidth: 0.5,
      borderBottomColor: themeColors.theme.black,
      color: themeColors.theme.white,
    },
    detailDescription: {
      paddingTop: 10,
      color: themeColors.theme.black,
    },
    detailBlock: {
      paddingBottom: 10,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.posterContainer}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
          style={styles.poster}
        />
      </View>
      <View style={styles.detailContainer}>
        <DetailBlock title={'Movie Name'} description={movie.title} />
        <DetailBlock title={'Release Date'} description={movie.release_date} />
        <DetailBlock title={'Overview'} description={movie.overview} />
        <DetailBlock
          title={'Popularity Point'}
          description={movie.popularity}
        />
        <DetailBlock title={'Total Vote'} description={movie.vote_count} />
        <DetailBlock title={'Vote Average'} description={movie.vote_average} />
      </View>
    </View>
  );
};
