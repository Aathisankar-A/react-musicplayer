import React from "react";

import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";

import './RunningCard.css';

export default function RunningCard() {
  const { songs, history, currentIndex } = useSong();
  const {queue} = useQueue();

  const current = songs[currentIndex];
  // const prev = songs[(currentIndex - 1 + songs.length) % songs.length];

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

  return(
    <div className="running-card">
      <div className="prev">
        <img
          src={prev.image}
          alt={prev.title}
        />
      </div>

        <img
          className="running-song" 
          src={current.image}
          alt={current.title}
        />

      <div className="next">
        <img
          src={next.image}
          alt={next.title}
        />
      </div>

    </div>
  )
}