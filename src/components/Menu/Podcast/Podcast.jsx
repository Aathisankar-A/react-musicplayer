// export default function ForYou() {
//   return <h2 style={{ color: "white" }}>Podcasts</h2>;
// }

import SongGrid from "../../common/SongGrid";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext/SearchContext.jsx";

const podcastData = [
  {
    id: 101,
    title: "Tech Talks",
    image: "/src/assets/podcast1.jpg"
  },
  {
    id: 102,
    title: "Daily Stories",
    image: "/src/assets/podcast2.jpg"
  }
];

export default function Podcast() {
  const { query } = useContext(SearchContext);

  const filteredPodcasts = podcastData.filter(podcast =>
    podcast.title.toLowerCase().includes(query.toLowerCase())
  );

  return <SongGrid title="🎙 Podcasts" songs={filteredPodcasts} />;
}