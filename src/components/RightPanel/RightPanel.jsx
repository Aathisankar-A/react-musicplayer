import React from "react";

import { useSong } from "../../Context/SongContext/UseSong.jsx";
import { useQueue } from "../../Context/QueueContext/QueueContext.jsx";

import './RightPanel.css';

export default function RightPanel() {
  const { setSongById, play } = useSong();
  const {queue} = useQueue();

  return (
    <div className="right-panel">
      <h2 className="right-title">Up Next</h2>

      <div className="queue-list">
        {queue.length === 0 && (
          <p className="empty-text">Nothing in queue</p>
        )}

        {queue.map((song) => (
          <div
            key={song.id}
            className="queue-item"
            onClick={() => {
              setSongById(song.id);
              play();
            }}
          >
            <img src={song.image} alt={song.title} className="queue-img" />

            <div className="queue-info">
              <p className="queue-title">{song.title}</p>
              {/* <p className="queue-artist">{song.artist}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
