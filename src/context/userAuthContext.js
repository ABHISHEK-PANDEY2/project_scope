import { useContext, createContext, useState, useEffect } from "react";

const userAuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <userAuthContext.Provider value={{ user, setUser }}>
      {children}
    </userAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(userAuthContext);
};
