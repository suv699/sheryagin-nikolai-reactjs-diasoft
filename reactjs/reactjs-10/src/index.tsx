import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk';

import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
