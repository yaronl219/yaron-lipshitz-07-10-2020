import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';
import './assets/styles/global.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Provider>
  </HashRouter>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
