import { createContext, useState } from 'react';

export const PlayerContext = createContext();

function PlayerContextProvider(props) {
  const [playerData, setPlayerData] = useState();

  const value = { playerData, setPlayerData };

  return(
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;