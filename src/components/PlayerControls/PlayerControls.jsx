import React, { useEffect, useState, useRef } from "react";

import PlayIcon from "../../assets/play-icon.svg?react";
import PauseIcon from "../../assets/pause-icon.svg?react";
import NextIcon from "../../assets/next-icon.svg?react";
import PrevIcon from "../../assets/prev-icon.svg?react";

import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";

import "./PlayerControls.css";

export default function PlayerControls() {
  const { isPlaying, togglePlay, play, next: songNext, prev, setSongById, currentTime, duration, audioRef } = useSong();

  const { queue, removeFromQueue } = useQueue();

  const progressRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragTime, setDragTime] = useState(null);

  // Spacebar shortcut
  useEffect(() => {
    const handleKey = (e) => {
      if (document.activeElement.tagName === 'INPUT') return; // Don't trigger if typing in input

      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
      else if (e.code === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
      else if (e.code === "ArrowLeft") {
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

  const calculateTimeFromMouse = (clientX) => {
    if (!progressRef.current || !duration) return null;

    const rect = progressRef.current.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;
    const clamped = Math.max(0, Math.min(1, percent));

    return clamped * duration;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const time = calculateTimeFromMouse(e.clientX);
      if (time !== null) setDragTime(time);
    };

    const handleMouseUp = () => {
      if (!isDragging) return;

      setIsDragging(false);

      if (dragTime !== null && audioRef.current) {
        audioRef.current.currentTime = dragTime;
      }

      setDragTime(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragTime]);

  const displayTime = isDragging && dragTime !== null ? dragTime : currentTime;

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-container">
        <span className="time">{formatTime(displayTime)}</span>

        <div
          className="progress-bar"
          ref={progressRef}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            const time = calculateTimeFromMouse(e.clientX);
            if (time !== null) setDragTime(time);
          }}
        >
          <div
            className="progress-fill"
            style={{
              width: `${(displayTime / duration) * 100 || 0}%`,
            }}
          />

          <div
            className="progress-thumb"
            style={{
              left: `${(displayTime / duration) * 100 || 0}%`,
            }}
          />
        </div>

        <span className="time">{formatTime(duration)}</span>
      </div>

      {/* Controls */}
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

