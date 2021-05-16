import { useState, createContext } from 'react';

export const LoggedInContext = createContext();

function LoggedInContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setLoggedIn(bool) {
    setIsLoggedIn(bool);
  }

  const value = { isLoggedIn, setLoggedIn };

  return(
    <LoggedInContext.Provider value={value}>
      {props.children}
    </LoggedInContext.Provider>
  )
}

export default LoggedInContextProvider;