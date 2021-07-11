import React from 'react';
import {View, Image} from 'react-native';
import {BASE_PATH_IMG} from '../../../config/api';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieImage = ({path}) => {
  const getImage = () => {
    if (path.toString().includes('data:image/jpeg;base64')) {
      return path;
    }
    return `${BASE_PATH_IMG}/w500/${path}`;
  };
  return (
    <View style={styles.viewPoster}>
      {path ? (
        <Image source={{uri: getImage()}} style={styles.poster} />
      ) : (
        <Image
          source={require('../../../assets/img/no-image.png')}
          style={styles.poster}
        />
      )}
    </View>
  );
};

MovieImage.defaultProps = {
  path: '',
};

MovieImage.propTypes = {
  path: PropTypes.string,
};

export default MovieImage;
