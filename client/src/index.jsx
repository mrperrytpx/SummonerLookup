import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import App from './App';
import LoggedInContextProvider from "./contexts/LoggedInContext";
import TokenContextProvider from "./contexts/TokenContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInContextProvider>
      <TokenContextProvider >
        <App />
      </TokenContextProvider>
    </LoggedInContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
