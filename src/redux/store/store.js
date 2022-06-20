import { compose } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from 'redux-logger'

import rootReducer from "../reducers/index";
import watchImagesLoad from "../sagas/imagesSaga";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  sagaMiddleware.run(watchImagesLoad);
  // store.dispatch({ type: 'HELLO' });
  return store;
};

export default configureStore;
