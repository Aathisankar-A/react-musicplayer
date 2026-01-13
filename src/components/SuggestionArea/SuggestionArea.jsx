import React from "react";

import './SuggestionArea.css';

import SuggestionCard from './SuggestionCard/SuggestionCard';
import { useSong } from "../../Context/SongContext/UseSong.jsx";

export default function SuggestionArea() {
  const { songs:suggestions } = useSong();

  return(
    <div className="suggestion-area">
      {suggestions.map((song, index) => (
        <SuggestionCard key={index} song={song} index={index} />
      ))}
    </div>
  )
}