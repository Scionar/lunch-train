import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Routes from './routes';
import socket from './websocket';
import './index.css';

socket.connect();
store.create();

ReactDOM.render(
  <Provider store={store.get()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
