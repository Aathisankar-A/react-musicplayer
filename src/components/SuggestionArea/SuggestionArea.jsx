import React from "react";

import './SuggestionArea.css';

import SuggestionCard from './SuggestionCard/SuggestionCard';

export default function SuggestionArea() {
  const suggestions = [
  {
    id: 1,
    title: "Song 1",
    image: "/src/assets/playlist-card1.jpg"
  },
  {
    id: 2,
    title: "Song 2",
    image: "/src/assets/playlist-card2.jpg"
  },
  {
    id: 3,
    title: "Song 3",
    image: "/src/assets/playlist-card3.jpg"
  },
  {
    id: 4,
    title: "Song 4",
    image: "/src/assets/playlist-card4.jpg"
  },
  {
    id: 5,
    title: "Song 5",
    image: "/src/assets/song-card1.jpg"
  },
  {
    id: 6,
    title: "Song 6",
    image: "/src/assets/song-card2.jpg"
  },
  {
    id: 7,
    title: "Song 7",
    image: "/src/assets/song-card3.jpg"
  },
  {
    id: 8,
    title: "Song 8",
    image: "/src/assets/song-card4.jpg"
  }
];

  return(
    <div className="suggestion-area">
      {suggestions.map((song, index) => (
        <SuggestionCard key={index} song={song} index={index} />
      ))}
    </div>
  )
}