import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as moviesActions from '../../../redux/movies/actions';
import {Actions} from 'react-native-router-flux';
import MoviesView from './view';

const Movies = () => {
  const dispatch = useDispatch();
  const {movies, loading} = useSelector(state => state.movies);

  const initMovies = useCallback(
    () => dispatch(moviesActions.getMovies()),
    [dispatch],
  );

  const setMovie = useCallback(
    value => dispatch(moviesActions.setMovie(value)),
    [dispatch],
  );

  const onMoviePress = useCallback(
    movie => {
      setMovie(movie);
      Actions.push('Movie', {title: movie?.original_title || ''});
    },
    [setMovie],
  );

  useEffect(() => {
    initMovies();
  }, [initMovies]);

  return (
    <MoviesView
      movies={movies}
      loading={loading}
      onMoviePress={onMoviePress}
      initMovies={initMovies}
    />
  );
};

export default Movies;
