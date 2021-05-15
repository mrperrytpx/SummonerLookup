import { createContext } from 'react';

const LoggedInContext = createContext({});

export const LoggedInProvider = LoggedInContext.Provider;
export default LoggedInContext;