import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import App from './App';
import LoggedInContextProvider from "./contexts/LoggedInContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInContextProvider>
      <App />
    </LoggedInContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
