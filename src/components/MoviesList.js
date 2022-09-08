import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Movie} from './Movie';
import {useDispatch} from 'react-redux';
import {setCurrentMovies} from '../features/MovieSlice/moviesSlice';
const apiKey = 'e770a46ceb191a058215eeb6a58ec919';
const windowWidth = Dimensions.get('window').width;
export const MoviesList = ({tabType}) => {
  const [movies, setMovies] = useState();
  const dispatch = useDispatch();
  console.log('tabType', tabType);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${tabType}?api_key=${apiKey}&language=en-US&page=1`,
      )
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => console.log('error', error));
  }, [tabType]);
  useEffect(() => {
    if (movies?.length > 0) {
      dispatch(setCurrentMovies(movies));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieContainer}>
        {movies?.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              voteAverage={movie.vote_average}
              posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
    width: windowWidth,
    marginLeft: 10,
  },
});
