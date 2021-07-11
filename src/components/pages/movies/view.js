import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import MovieCard from '../../moleculas/card-movie/view';
import PropTypes from 'prop-types';
import styles from './styles';
import {bool} from 'prop-types';

const Movies = ({movies, loading, onMoviePress, initMovies}) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        data={movies}
        keyExtractor={item => `movie-card-${item.id}`}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={initMovies} />
        }
        renderItem={({item}) => (
          <MovieCard movie={item} onPressMovie={movie => onMoviePress(movie)} />
        )}
        numColumns={2}
      />
    </View>
  );
};

Movies.defaultProps = {
  movies: [],
  loading: false,
  onMoviePress: () => {},
  initMovies: () => {},
};

Movies.propTypes = {
  movies: PropTypes.array,
  loading: bool,
  onMoviePress: PropTypes.func,
  initMovies: PropTypes.func,
};

export default Movies;
