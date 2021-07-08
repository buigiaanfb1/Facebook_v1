import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common/styles.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './common/theme';
// redux
import { Provider } from 'react-redux';
import store from './redux/reducers/config';

import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged((_user) => {
  if (!app) {
    app = ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
