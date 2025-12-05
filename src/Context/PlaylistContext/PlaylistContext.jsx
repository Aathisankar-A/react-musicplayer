import { createContext, useState, useEffect } from "react";

export const PlaylistContext = createContext();

export default function PlaylistProvider({ children }) {

  const [playlists, setPlaylists] = useState(() => {
    const saved = localStorage.getItem("playlists");
    return saved ? JSON.parse(saved) : ["Liked Songs", "Playlist 1", "Playlist 2"];
  });

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const addPlaylist = (name) => {
    setPlaylists([...playlists, name]);
  };

  const removePlaylist = (index) => {
    setPlaylists(playlists.filter((_, i) => i !== index));
  };

  return (
    <PlaylistContext.Provider value={{ playlists, addPlaylist, removePlaylist }}>
      {children}
    </PlaylistContext.Provider>
  );
}