import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase.-client";
const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);
  // sign up
  const signUpNewUser = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: "email",
      password: "password",
    });
    if (error) {
      console.error("there was a problem signing up:", error);
      return { success: false, error };
    }
    return { success: true, data };
  };

  // sign in user
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "email",
      password: "password",
    });
    if (error) {
      console.error("there was a problem in signin", error);
      return { success: false, error };
    }
    return { success: true, data };
  };
  // sign out user
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("there was an error:", error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const authInfo = () => {
    session, signUpNewUser, signIn, signOut;
  };
  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
