import * as types from './types';

export const initialState = {
  loading: false,
  movies: [],
  movie: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_MOVIES_LIST:
      return {...state, movies: action.payload?.movies};
    case types.UPDATE_MOVIES_LOADING:
      return {...state, loading: action.payload?.loading};
    case types.UPDATE_MOVIES_ITEM:
      return {...state, movie: action.payload?.movie};
    case types.UPDATE_MOVIES_ADD:
      return {...state, movies: [action.payload?.movie, ...state.movies]};
    default:
      return state;
  }
};

export default reducer;
