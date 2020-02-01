import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './reducers';

export default () => {
  // Redux dev tools set up
  let composeEnhancers = compose;
  if (
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  // Redux middlewares
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];

  // initialize store creation
  const configureStore = reducer =>
    createStore(reducer, composeEnhancers(...enhancers));

  // set store config
  const persistConfig = {
    key: 'nextjs',
    storage
  };

  // we'll pass in the configurations and the root reducer
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  // pass in persistedReducer into our store configurator
  const store = configureStore(persistedReducer);

  // this is hacky, but it works
  store.__persistor = persistStore(store);

  return store;
};
