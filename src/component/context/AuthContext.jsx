import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
