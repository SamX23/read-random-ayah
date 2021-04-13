import { createContext, useContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children, value }) => (
  <StateContext.Provider value={value}>{children}</StateContext.Provider>
);

const useGlobalState = () => useContext(StateContext);

export { StateProvider, useGlobalState };
