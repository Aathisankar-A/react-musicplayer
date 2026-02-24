import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { usePlaylist } from "../../Context/PlaylistContext/PlaylistContext";

import HeartIcon from "../../assets/heart-icon.svg?react";

import './Playlist.css'

export default function Playlist() {

  const { playlists, addPlaylist, removePlaylist, toggleLike, isLiked } = usePlaylist();

  const handleAdd = () => {
    const name = prompt("Enter playlist name:");
    if (name && name.trim() !== "") addPlaylist(name.trim());
  };

  return (
    <div className="playlist">
      <h2>
        <em> Playlists </em>
      </h2>

      {/* {playlists.map((p, index) => (
        <div key={index} className="playlist-item">

          {p === "Liked Songs" ? (
            <>
              <h4><Link to="/liked">Liked Songs</Link></h4>
              <HeartIcon className="heart-icon" />
            </>
          ) : (
            <>
              <h4>{p}</h4>
              <button 
                className="remove-btn"
                onClick={() => removePlaylist(index)}
              >
                ✕
              </button>
            </>
          )}
        </div>
      ))} */}

      {playlists.map((playlist) => (

        playlist.id === "liked" ? (
            <div key={playlist.id} className="playlist-item">
              <h4>
                <Link to={`/playlist/${playlist.id}`}>
                  {playlist.name}
                </Link>
              </h4>
            </div>) : (
            <div key={playlist.id} className="playlist-item">
              <h4>
                <Link to={`/playlist/${playlist.id}`}>
                  {playlist.name}
                </Link>
              </h4>
              <button
                className="remove-btn"
                onClick={() => removePlaylist(playlist.id)}
              >
                ✕
              </button>
            </div>
          )
      ))}

      <button className="add-playlist-btn" onClick={handleAdd}>
        + Add Playlist
      </button>
    </div>
  );
}