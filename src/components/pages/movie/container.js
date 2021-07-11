import React from 'react';
import {useSelector} from 'react-redux';
import MovieView from './view';

const Movie = () => {
  const {movie} = useSelector(state => state.movies);

  return <MovieView movie={movie} />;
};

export default Movie;
