import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Routes from './routes';
import socket from './websocket';
import './index.css';

socket.connect();
store.create();

ReactDOM.render(
  <Provider store={store.get()}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
