import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { store, persitor } from './store';
import history from './services/history';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persitor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
