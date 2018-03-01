import React from 'react';
import { TodoContainer } from 'containers';
import { PageTemplate } from 'components'

import styles from './HomePage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const HomePage = () => {
  return (
    <PageTemplate className={cx('homepage')}>
      <TodoContainer/>
    </PageTemplate>
  );
};

export default HomePage;