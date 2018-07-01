import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import rootSaga from "store/sagas";
import reducer from "store/reducer";

// Setup
const middleWare = [];

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();
middleWare.push(sagaMiddleware);

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development"
});
middleWare.push(loggerMiddleware);

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middleWare)
)(createStore);

const makeStore = (initialState, options) => {
  const store = createStoreWithMiddleware(reducer, initialState);

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  // run the rootSaga initially
  store.runSagaTask();

  return store;
};

export default makeStore;
