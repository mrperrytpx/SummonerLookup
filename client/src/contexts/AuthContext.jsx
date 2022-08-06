import { createContext } from "react";
import { useProvideAuth } from "../hooks/useAuth";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;