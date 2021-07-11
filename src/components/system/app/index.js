import React from 'react';
import {Provider} from 'react-redux';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import store from '../../../config/redux';
import Movies from '../../pages/movies';
import Movie from '../../pages/movie';
import MovieAdd from '../../pages/movie-add';

const navBarProps = {
  backTitle: 'Movies',
  backTitleEnabled: true,
  back: true,
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Stack key="root">
          <Scene
            key="Movies"
            component={Movies}
            rightTitle={'Add'}
            onRight={() => Actions.push('MovieAdd')}
            initial
          />
          <Scene key="Movie" component={Movie} {...navBarProps} />
          <Scene
            key="MovieAdd"
            title={'Create movie'}
            component={MovieAdd}
            {...navBarProps}
          />
        </Stack>
      </Router>
    </Provider>
  );
};

export default App;
