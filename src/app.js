import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import getStore from './store';
import Router from './router';

if (__DEV__) {
  const xhr = global.originalXMLHttpRequest
    ? global.originalXMLHttpRequest
    : global.XMLHttpRequest;

  global.XMLHttpRequest = xhr;
}

export default class App extends Component {
  render() {
    const {store, persistor} = getStore();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}
