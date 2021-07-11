import axios from 'axios';
import {API_HOST, API_KEY, LANG} from '../config/api';

const aInstance = axios.create({
  baseURL: API_HOST,
  headers: {'Content-Type': 'application/json'},
});

export function getNewsMoviesApi(page = 1) {
  const url = `/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
  return aInstance.get(url);
}
