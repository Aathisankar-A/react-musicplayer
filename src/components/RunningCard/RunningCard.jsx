import React from "react";
import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";
import { usePlayerUI } from "../../Context/PlayerUIContext/PlayerUIContext.jsx";

import "./RunningCard.css";

export default function RunningCard() {
  const { songs, history, currentIndex } = useSong();
  const { queue } = useQueue();
  const { isMiniPlayer, setIsMiniPlayer } = usePlayerUI();

  const current = songs[currentIndex];

  let prev;
    if(history.length > 0){
    const lastIndex = history[history.length - 1];
    prev = songs[lastIndex];
  }
  else{
    prev = songs[(currentIndex - 1 + songs.length) % songs.length];
  }
  
  let next;

  if(queue.length > 0){
    next = queue[0];
  }
  else{
    next = songs[(currentIndex + 1) % songs.length];
  }

  return (
    <div
      className={`running-card ${isMiniPlayer ? "mini" : "full"}`}
      onClick={() => {
        if (isMiniPlayer) setIsMiniPlayer(false);
      }}
    >
      {/* FULL PLAYER */}
      {!isMiniPlayer && (
        <>
          <div className="prev">
            <img src={prev.image} alt={prev.title} />
          </div>

          <img
            className="running-song"
            src={current.image}
            alt={current.title}
          />

          <div className="next">
            <img src={next.image} alt={next.title} />
          </div>
        </>
      )}

      {/* MINI PLAYER */}
      {isMiniPlayer && (
        <div className="mini-content">
          <img src={current.image} alt={current.title} />
          <div className="mini-info">
            <p className="mini-title">{current.title}</p>
            <span className="mini-sub">Tap to expand</span>
          </div>
        </div>
      )}
    </div>
  );
}
