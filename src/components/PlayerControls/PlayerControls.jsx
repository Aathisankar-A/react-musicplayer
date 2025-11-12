import React, { useEffect } from "react";

import PlayIcon from "../../assets/play-icon.svg?react";
import PauseIcon from "../../assets/pause-icon.svg?react";
import NextIcon from "../../assets/next-icon.svg?react";
import PrevIcon from "../../assets/prev-icon.svg?react";

import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";

import "./PlayerControls.css";

export default function PlayerControls() {
  const { isPlaying, togglePlay, play, next: songNext, prev, setSongById } = useSong();
  const { queue, removeFromQueue } = useQueue();

  // Spacebar shortcut
  useEffect(() => {
    const handleKey = (e) => {
      if(e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      if(e.code === "ArrowRight") handleNext();
      if(e.code === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [togglePlay]);

  const handleNext = () => {
    if (queue.length > 0) {
      const nextSong = queue[0];
      setSongById(nextSong.id);
      removeFromQueue(0);
    }
    else {
      songNext();
    }
    play();
  };


  return (
    <div className="player-controls">
      <button className="control-btn" onClick={prev}>
        <PrevIcon className="control-icon" />
      </button>

      <button className="control-btn" onClick={togglePlay}>
        {isPlaying ? (
          <PauseIcon className="control-icon main-icon" />
        ) : (
          <PlayIcon className="control-icon main-icon" />
        )}
      </button>

      <button className="control-btn" onClick={handleNext}>
        <NextIcon className="control-icon" />
      </button>
    </div>
  );
}
