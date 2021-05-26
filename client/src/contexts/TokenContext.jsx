import { useState, createContext, useCallback } from 'react';

export const TokenContext = createContext();

function TokenContextProvider(props) {
  const [token, setToken] = useState("");

  const setNewToken = useCallback((string) => {
    setToken(string);
  }, [setToken]);

  const value = { token, setNewToken };

  return(
    <TokenContext.Provider value={value}>
      {props.children}
    </TokenContext.Provider>
  )
}

export default TokenContextProvider;