import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {rootReducer} from '../reducers/rootReducer';

const logger = createLogger({
  diff: true, // (alpha) show diff between states?
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
