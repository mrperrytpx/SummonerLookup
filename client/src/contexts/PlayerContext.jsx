import { createContext, useState } from 'react';

export const PlayerContext = createContext();

function PlayerContextProvider(props) {
  const [playerData, setPlayerData] = useState();

  function setPlayer(object) {
    setPlayerData(object);
  }

  const value = { playerData, setPlayer };

  return(
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;