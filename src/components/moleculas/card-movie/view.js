import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {BASE_PATH_IMG} from '../../../config/api';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieCard = ({movie, onPressMovie}) => {
  const getImage = () => {
    if (movie.poster_path.toString().includes('data:image/jpeg;base64')) {
      return movie.poster_path;
    }
    return `${BASE_PATH_IMG}/w500/${movie.poster_path}`;
  };
  return (
    <TouchableOpacity onPress={() => onPressMovie(movie)}>
      <View style={styles.card}>
        {movie.poster_path ? (
          <Image source={{uri: getImage()}} style={styles.image} />
        ) : (
          <Image
            source={require('../../../assets/img/no-image.png')}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

MovieCard.defaultProps = {
  movie: {},
  onPressMovie: () => {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  onPressMovie: PropTypes.func,
};

export default MovieCard;
