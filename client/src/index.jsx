import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './App';

import ContextProviders from "./contexts/ContextProviders";

ReactDOM.render(
  <React.StrictMode>
    <ContextProviders>
      <App />
    </ContextProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
