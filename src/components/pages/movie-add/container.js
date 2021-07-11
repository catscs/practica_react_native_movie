import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as moviesActions from '../../../redux/movies/actions';
import MovieAddView from './view';

const MovieAdd = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(state => state.movies);

  const addMovie = useCallback(
    value => dispatch(moviesActions.saveMovie(value)),
    [dispatch],
  );

  return <MovieAddView loading={loading} addMovie={addMovie} />;
};

export default MovieAdd;
