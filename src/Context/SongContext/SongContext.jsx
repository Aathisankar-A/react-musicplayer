import { createContext, useState } from "react";

export const SongContext = createContext();

// export function useSong() {
//   return useContext(SongContext);
// }

export default function SongProvider({ children }) {
  const songs = [
    { id: 1, title: "Song 1", image: "/src/assets/playlist-card1.jpg" },
    { id: 2, title: "Song 2", image: "/src/assets/playlist-card2.jpg" },
    { id: 3, title: "Song 3", image: "/src/assets/playlist-card3.jpg" },
    { id: 4, title: "Song 4", image: "/src/assets/playlist-card4.jpg" },
    { id: 5, title: "Song 5", image: "/src/assets/song-card1.jpg" },
    { id: 6, title: "Song 6", image: "/src/assets/song-card2.jpg" },
    { id: 7, title: "Song 7", image: "/src/assets/song-card3.jpg" },
    { id: 8, title: "Song 8", image: "/src/assets/song-card4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [history, setHistory] = useState([]);


  const currentSong = songs[currentIndex];

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);
  const togglePlay = () => setIsPlaying((v) => !v);

  const next = () => {
    setCurrentIndex((i) => (i + 1) % songs.length);
    play();
  };

  const prev = () => {
    if(history.length > 0){
      const lastIndex = history[history.length - 1];
      setHistory((h) => h.slice(0, -1));
      setCurrentIndex(lastIndex);
      play();
    }
    else{
      // fallback normal previous
      setCurrentIndex(i => (i - 1 + songs.length) % songs.length);
      play();
    }
  };

  const setSongById = (id) => {
    const index = songs.findIndex(s => s.id === id);
    if (index !== -1) {
      setHistory((h) => [...h, currentIndex]);  // save old index
      setCurrentIndex(index);
      play();
    }
  };

  return (
    <SongContext.Provider
      value={{
        songs,
        currentSong,
        currentIndex,
        setCurrentIndex,
        setSongById,
        isPlaying,
        play,
        pause,
        togglePlay,
        next,
        prev,
        history,
      }}
    >
      {children}
    </SongContext.Provider>
  );
}
