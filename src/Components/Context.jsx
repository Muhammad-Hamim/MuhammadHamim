import { createContext, useState } from "react";

export const StateContext = createContext();
const Context = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const info = {
    isOpen,
    setIsOpen,
  };
  return <StateContext.Provider value={info}>{children}</StateContext.Provider>;
};

export default Context;
