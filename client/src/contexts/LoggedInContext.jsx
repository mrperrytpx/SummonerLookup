import { useState, createContext, useCallback } from 'react';

export const LoggedInContext = createContext();

function LoggedInContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setLoggedIn = useCallback((bool) => {
    setIsLoggedIn(bool);
  }, [setIsLoggedIn]);

  const value = { isLoggedIn, setLoggedIn };

  return(
    <LoggedInContext.Provider value={value}>
      {props.children}
    </LoggedInContext.Provider>
  )
}

export default LoggedInContextProvider;