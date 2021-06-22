import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

import App from './App';

// Context providers
import LoggedInContextProvider from "./contexts/LoggedInContext";
import TokenContextProvider from "./contexts/TokenContext";
import PlayerContextProvider from "./contexts/PlayerContext";
import LeagueVersionContextProvider from './contexts/LeagueVersionContext';

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoggedInContextProvider>
        <TokenContextProvider >
          <PlayerContextProvider>
            <LeagueVersionContextProvider>
              <App />
            </LeagueVersionContextProvider>
          </PlayerContextProvider>
        </TokenContextProvider>
      </LoggedInContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
