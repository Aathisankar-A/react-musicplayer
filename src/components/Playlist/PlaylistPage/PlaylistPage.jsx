import React from "react";
import {lazy} from 'react';
import { usePlaylist } from "../../../Context/PlaylistContext/PlaylistContext.jsx";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext/SearchContext.jsx";
// import SuggestionCard from "../../SuggestionArea/SuggestionCard/SuggestionCard";

const SongGrid = lazy(() => import("../../common/SongGrid.jsx"));

export default function LikedSongs() {
  // const { likedSongs } = usePlaylist();

  // const { query } = useContext(SearchContext);

  // const filteredSongs = likedSongs.filter(song =>
  //   song.title.toLowerCase().includes(query.toLowerCase())
  // );

  const { id } = useParams();
  const { playlists } = usePlaylist();
  const { query } = useContext(SearchContext);

  const playlist = playlists.find(pl => pl.id === id);

  if (!playlist) return <p>Playlist not found</p>;

  const filteredSongs = playlist.songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {(filteredSongs.length === 0) ? (
        <SongGrid title="No songs yet" songs={[]} />
      ) : (
        <SongGrid title={`${playlist.name}`} songs={filteredSongs} />
      )}
    </>
  );

  // return (
  //   <div className="suggestion-area">
  //     {likedSongs.length === 0 && (
  //       <h3 style={{ color: "white" }}>No liked songs yet</h3>
  //     )}

  //     {likedSongs.map((song, index) => (
  //       <SuggestionCard key={song.id} song={song} index={index} />
  //     ))}
  //   </div>
  // );
}