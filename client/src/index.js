import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
