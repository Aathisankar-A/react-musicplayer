import SuggestionCard from "../SuggestionArea/SuggestionCard/SuggestionCard";
import "./SongGrid.css";

export default function SongGrid({ title, songs }) {
  return (
    <div className="song-grid-wrapper">
      <h2 className="section-title">{title}</h2>

      <div className="song-grid">
        {songs.map((song, index) => (
          <SuggestionCard
            key={song.id}
            song={song}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
