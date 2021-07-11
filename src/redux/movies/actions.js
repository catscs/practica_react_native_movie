import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as types from './types';
import * as api from '../../api';

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_MOVIES_LOADING,
    payload: {loading},
  };
};

export const setMovies = (movies = []) => {
  return {
    type: types.UPDATE_MOVIES_LIST,
    payload: {movies},
  };
};

export const setMovie = movie => {
  return {
    type: types.UPDATE_MOVIES_ITEM,
    payload: {movie},
  };
};

export const addMovie = movie => {
  return {
    type: types.UPDATE_MOVIES_ADD,
    payload: {movie},
  };
};

export const saveMovie = fromData => {
  return (dispatch, _) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(addMovie(fromData));
      Actions.pop();
      dispatch(setLoading(false));
    }, 2000);
  };
};

export const getMovies = () => {
  return async (dispatch, _) => {
    try {
      dispatch(setLoading(true));
      const response = await api.getNewsMoviesApi();
      const movies = response.data?.results || [];
      dispatch(setMovies(movies));
    } catch (e) {
      Alert.alert('Error', e.message || 'An error has occurred');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
