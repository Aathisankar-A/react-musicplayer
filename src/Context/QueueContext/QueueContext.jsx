import { createContext, useContext, useState } from "react";

export const QueueContext = createContext();
export const useQueue = () => useContext(QueueContext);

export default function QueueProvider({ children }) {
  const [queue, setQueue] = useState([]);

  // add to queue function
  const addToQueue = (song) => {
    setQueue((q) => [...q, song]);
  };

  // Remove a song by index
  const removeFromQueue = (index) => {
    setQueue((q) => q.filter((_, i) => i !== index));
  };
  return (
    <QueueContext.Provider
      value={{
        queue,
        addToQueue,
        removeFromQueue,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}