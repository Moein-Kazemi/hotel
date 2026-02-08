"use client";
import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const defaultReservationState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(defaultReservationState);
  const resetRange = () => setRange(defaultReservationState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("The context was using outside of the Provider");
  return context;
}

export { ReservationProvider, useReservation };
