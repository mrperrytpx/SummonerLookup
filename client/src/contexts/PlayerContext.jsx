import { createContext } from 'react';

export const PlayerContext = createContext();

function PlayerContextProvider(props) {
  const value = {};

  return(
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;