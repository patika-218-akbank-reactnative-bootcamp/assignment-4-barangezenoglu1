import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Movie} from './Movie';
import {useDispatch} from 'react-redux';
import {setCurrentMovies} from '../features/MovieSlice/moviesSlice';
const apiKey = 'e770a46ceb191a058215eeb6a58ec919';
const windowWidth = Dimensions.get('window').width;
export const MoviesList = ({movieFilter, type, input}) => {
  const [movies, setMovies] = useState();
  const dispatch = useDispatch();
  const URL =
    type === 'search' // we use search for filter the movies by name.
      ? `http://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
      : `https://api.themoviedb.org/3/movie/${movieFilter}?api_key=${apiKey}&language=en-US&page=1`;

  const displayMovies = () => {
    if (movies?.length > 0) {
      return movies?.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            voteAverage={movie.vote_average}
            posterPath={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        );
      });
    } else {
      return <Text style={styles.infoMsg}>No movies...</Text>;
    }
  };
  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => setMovies([]));
  }, [movieFilter, URL]);
  useEffect(() => {
    if (movies?.length > 0) {
      dispatch(setCurrentMovies(movies));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieContainer}>{displayMovies()}</View>
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
  infoMsg: {
    fontSize: 15,
    color: 'black',
  },
});
