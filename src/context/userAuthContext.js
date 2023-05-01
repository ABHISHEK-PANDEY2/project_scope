import { useContext, createContext, useState } from "react";

const userAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ uid: null, email: null, username: null });
  return (
    <userAuthContext.Provider value={{ user, setUser }}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
