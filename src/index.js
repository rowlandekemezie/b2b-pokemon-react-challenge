import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import Router from 'react-router-dom/Router';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
ReactDOM.render(
  <Router history={history}>
   <App />
  </Router>, document.getElementById('root'));

registerServiceWorker();
