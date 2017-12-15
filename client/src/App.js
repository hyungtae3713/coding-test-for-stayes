import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
// import styles from './App.scss';
// import classNames from 'classnames/bind';
import { HomePage } from 'components';

// const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <div className={cx('test-bg')}>
          blahblah~
        </div> */}
        <HomePage/>
      </Provider>
    );
  }
}

export default App;
