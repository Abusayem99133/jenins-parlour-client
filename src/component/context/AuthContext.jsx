import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase-client";
const AuthContext = createContext(null);
export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  // sign up
  // const signUpNewUser = async ({ first_name, last_name, email, password }) => {
  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       data: {
  //         first_name,
  //         last_name,
  //         role: "user",
  //       },
  //     },
  //   });
  //   if (error) {
  //     console.error("there was a problem signing up:", error);
  //     return { success: false, error };
  //   }
  //   return { success: true, data };
  // };
  const signUpNewUser = async ({ first_name, last_name, email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name,
          last_name,
        },
      },
    });

    if (error) {
      return { success: false, error };
    }

    // insert profile with role = user
    await supabase.from("profiles").insert({
      id: data.user.id,
      email,
      role: "user",
    });

    return { success: true, data };
  };

  // sign in user
  const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
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
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session);
    };
    getSession();
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, ses) => {
        setSession(ses);
      }
    );
    return () => listener.subscription.unsubscribe();
    // supabase.auth.getSession().then(({ data: { session } }) => {
    //   setSession(session);
    // });
    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    // });
  }, []);
  const authInfo = {
    session,
    signUpNewUser,
    signIn,
    signOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
