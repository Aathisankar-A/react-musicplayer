// export default function Top50() {
//   return <h2 style={{ color: "white" }}>Top 50 Songs</h2>;
// }

import { useSong } from "../../../Context/SongContext/UseSong";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext/SearchContext.jsx";
import SongGrid from "../../common/SongGrid";

export default function Top50() {
  const { songs } = useSong();
  const { query } = useContext(SearchContext);

  // fake top 50 (later backend)
  const top50 = [...songs].reverse();

  const filteredTop50 = top50.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return <SongGrid title="Top 50" songs={filteredTop50} />;
}
