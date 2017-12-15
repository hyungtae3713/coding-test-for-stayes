import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import middlewares from './middlewares';
import reducers from './reducers';
import sagas from './sagas';

const isDev = process.env.NODE_ENV === 'development';

const devtools = isDev && window.devToolsExtension 
  ? window.devToolsExtension 
  : () => fn => fn;

const configureStore = (initialState, services = { }) => {

  const sagaMiddleware = createSagaMiddleware();
  const enhancers = [
    applyMiddleware(
      ...middlewares,
      sagaMiddleware
    ),
    devtools()
  ];

  const store = createStore(reducers, initialState, compose(...enhancers));
  let sagaTask = sagaMiddleware.run(sagas, services);

  if(module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });

    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
  
};

export default configureStore;