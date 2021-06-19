import React from 'react';
import ReactDOM from 'react-dom';

import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

import './styles/index.css';

import App from './App';
import LoggedInContextProvider from "./contexts/LoggedInContext";
import TokenContextProvider from "./contexts/TokenContext";
import PlayerContextProvider from "./contexts/PlayerContext";


const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoggedInContextProvider>
        <TokenContextProvider >
          <PlayerContextProvider>
            <App />
          </PlayerContextProvider>
        </TokenContextProvider>
      </LoggedInContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
