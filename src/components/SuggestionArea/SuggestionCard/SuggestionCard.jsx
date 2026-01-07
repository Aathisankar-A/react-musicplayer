import React from "react";

import { useSong } from "../../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../../Context/QueueContext/QueueContext.jsx";

import './SuggestionCard.css';
// import LeftUpperPart from '../LeftUpperPart/LeftUpperPart';

export default function SuggestionCard({song, index}) {
  const { setCurrentIndex, play } = useSong();
  const { addToQueue } = useQueue();

  return(
    <div className="suggestion-card">
      <img
        onClick={() => {
          setCurrentIndex(index);
          play();
        }}
        className="suggestion-card-image"
        src={song.image} 
        alt={song.title}
      /> 
      <button 
        onClick={() => addToQueue(song)}
        className="add-queue-btn"
        >
        Add to Queue
      </button>

      <p className="song-title">{song.title}</p>
    </div>
  )
}