import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import MovieImage from '../../atoms/image-movie/view';
import PropTypes from 'prop-types';
import styles from './styles';

const Movie = ({movie}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MovieImage path={movie?.poster_path} />
      <View style={styles.viewInfo}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Text style={styles.overview}>{movie?.overview}</Text>
      </View>
    </ScrollView>
  );
};

Movie.defaultProps = {
  movie: {},
};

Movie.propTypes = {
  movie: PropTypes.object,
};

export default Movie;
