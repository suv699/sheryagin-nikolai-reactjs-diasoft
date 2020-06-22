import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/index';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
