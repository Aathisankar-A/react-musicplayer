import { createContext, useState, useEffect, useContext} from "react";

export const PlaylistContext = createContext();
export const usePlaylist = () => useContext(PlaylistContext);

export default function PlaylistProvider({ children }) {

  // const [playlists, setPlaylists] = useState(() => {
  //   const saved = localStorage.getItem("playlists");
  //   return (
  //     saved ? JSON.parse(saved) : 
  //       [
  //         {
  //           id: "liked",
  //           name: "Liked Songs",
  //           songs: []
  //         }
  //       ]
  //   );
  // });

  const [playlists, setPlaylists] = useState(() => {
    const saved = localStorage.getItem("playlists");

    if (!saved) {
      return [
        { id: "liked", name: "Liked Songs", songs: [] }
      ];
    }

    const parsed = JSON.parse(saved);

    // If old format (array of strings)
    if (typeof parsed[0] === "string") {
      return [
        { id: "liked", name: "Liked Songs", songs: [] }
      ];
    }

    return parsed;
  });

  useEffect(() => {
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);


  const addPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now().toString(),
      name,
      songs: []
    };

  setPlaylists(prev => [...prev, newPlaylist]);
};

  const removePlaylist = (playlistId) => {
    setPlaylists(prev => prev.filter(pl => pl.id !== playlistId));
  };

  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists(prev =>
      prev.map(pl =>
        pl.id === playlistId
          ? { ...pl, songs: [...pl.songs, song] }
          : pl
      )
    );
  };

  const isLiked = (song) => {
    const likedPlaylist = playlists.find(pl => pl.id === "liked");
    if(!likedPlaylist)
      return false;
    return likedPlaylist.songs.some((s) => s.id === song.id);
  };

  const toggleLike = (song) => {
    setPlaylists(prev =>
      prev.map(pl => {
        if (pl.id !== "liked") return pl;

        const exists = pl.songs.some(s => s.id === song.id);

        return {
          ...pl,
          songs: exists
            ? pl.songs.filter(s => s.id !== song.id)
            : [...pl.songs, song]
        };
      })
    );
  };

  return (
    <PlaylistContext.Provider 
      value={{ 
        playlists,
        addPlaylist,
        removePlaylist,
        addSongToPlaylist,
        toggleLike,
        isLiked 
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}