import React, { useContext } from 'react';
import { PlaylistContext } from "../../Context/PlaylistContext/PlaylistContext";

import HeartIcon from "../../assets/heart-icon.svg?react";

import './Playlist.css'

export default function Playlist() {

  const { playlists, addPlaylist, removePlaylist } = useContext(PlaylistContext);

  const handleAdd = () => {
    const name = prompt("Enter playlist name:");
    if (name && name.trim() !== "") addPlaylist(name.trim());
  };

  return (
    <div className="playlist">
      <h2>
        <em> Playlists </em>
      </h2>

      {playlists.map((p, index) => (
        <div key={index} className="playlist-item">
          <h4>{p}</h4>

          {p === "Liked Songs" ? (
            <HeartIcon className="heart-icon" />
          ) : (
            <button 
              className="remove-btn"
              onClick={() => removePlaylist(index)}
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <button className="add-playlist-btn" onClick={handleAdd}>
        + Add Playlist
      </button>
    </div>
  );
}