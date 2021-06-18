import { createContext, useState, useCallback } from 'react';

export const PlayerContext = createContext();

function PlayerContextProvider(props) {
  const [playerData, setPlayerData] = useState();

  const setPlayer = useCallback((object) => {
    setPlayerData(object)
  }, [setPlayerData]);

  const value = { playerData, setPlayer };

  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;