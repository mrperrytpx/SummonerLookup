import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

import App from './App';

// Context providers
import LoggedInContextProvider from "./contexts/LoggedInContext";
import TokenContextProvider from "./contexts/TokenContext";
import LeagueVersionContextProvider from './contexts/LeagueVersionContext';

// React-query Cache
const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoggedInContextProvider>
        <TokenContextProvider >
          <LeagueVersionContextProvider>
            <App />
          </LeagueVersionContextProvider>
        </TokenContextProvider>
      </LoggedInContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
