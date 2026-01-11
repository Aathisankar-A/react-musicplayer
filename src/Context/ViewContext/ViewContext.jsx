import { createContext, useContext, useState } from "react";

export const ViewContext = createContext();

export function useView() {
  return useContext(ViewContext);
}

export default function ViewProvider({ children }) {
  const [currentView, setCurrentView] = useState("");
  // default view

  return (
    <ViewContext.Provider value={{ currentView, setCurrentView }}>
      {children}
    </ViewContext.Provider>
  );
}