"use client";
import { createContext, useContext, useState } from "react";

const MenuContext = createContext();
const initialState = false;

function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggleIsOpen = () => setIsOpen((isOpen) => !isOpen);

  return (
    <MenuContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

function useMenu() {
  const context = useContext(MenuContext);

  if (context === undefined)
    throw new Error("The context was using outside of the Provider");
  return context;
}

export { MenuProvider, useMenu };
