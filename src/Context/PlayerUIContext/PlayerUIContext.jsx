import { createContext, useContext, useState } from "react";

const PlayerUIContext = createContext();

export const usePlayerUI = () => useContext(PlayerUIContext);

export default function PlayerUIProvider({ children }) {
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);

  return (
    <PlayerUIContext.Provider
      value={{ isMiniPlayer, setIsMiniPlayer }}
    >
      {children}
    </PlayerUIContext.Provider>
  );
}
