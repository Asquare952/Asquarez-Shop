"use client";

import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); //null = not logged in

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) {
      try {
        setAuthUser(JSON.parse(user));
      } catch (e) {
        console.error("Invalid authUser in localStorage:", e);
        localStorage.removeItem("authUser")
      }
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("authUser", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setAuthUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
