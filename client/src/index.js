import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/main.scss';
import App from './App';
import { AppContainer as HotContainer } from 'react-hot-loader';

import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    <HotContainer>
      <Component />
    </HotContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if(module.hot) {
  module.hot.accept('./App', () => { render(App) })
}

registerServiceWorker();