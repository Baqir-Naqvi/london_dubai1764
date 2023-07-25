"use client"
import React, { createContext, useState, useContext } from "react";
const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(true);
  const [city, setCity] = useState("");

  return (
    <Context.Provider
      value={{
        state,
        setState,
        city,
        setCity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useGlobalContext = () => useContext(Context);
