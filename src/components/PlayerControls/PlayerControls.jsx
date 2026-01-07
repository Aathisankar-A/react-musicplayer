import React, { useEffect } from "react";

import PlayIcon from "../../assets/play-icon.svg?react";
import PauseIcon from "../../assets/pause-icon.svg?react";
import NextIcon from "../../assets/next-icon.svg?react";
import PrevIcon from "../../assets/prev-icon.svg?react";

import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";

import "./PlayerControls.css";

export default function PlayerControls() {
  const { isPlaying, togglePlay, play, next: songNext, prev, setSongById, currentTime,duration, audioRef } = useSong();
  const { queue, removeFromQueue } = useQueue();

  // Spacebar shortcut
  useEffect(() => {
    const handleKey = (e) => {
      if(e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      else if(e.code === "ArrowRight"){
        e.preventDefault();
        handleNext();
      }
      else if(e.code === "ArrowLeft"){
        e.preventDefault();
        prev();
      }
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


  // helper for progress bar
  const formatTime = (time) => {
    if (!time) return "0:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  // Progress Bar

  return (
    <>
      <div className="progress-container">
        <span className="time">
          {formatTime(currentTime)}
        </span>

        <div
          className="progress-bar"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            audioRef.current.currentTime = percent * duration;
          }}>

          <div
            className="progress-fill"
            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
          />
        </div>

        <span className="time">
          {formatTime(duration)}
        </span>
      </div>

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
    </>
  );
}
