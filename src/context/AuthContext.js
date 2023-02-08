// store logged-in user details. React Context is designed to store data which is global and shared between components
import { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: undefined,
  isLoading: false,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);