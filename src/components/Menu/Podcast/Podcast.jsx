// export default function ForYou() {
//   return <h2 style={{ color: "white" }}>Podcasts</h2>;
// }

import SongGrid from "../../common/SongGrid";

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
  return <SongGrid title="🎙 Podcasts" songs={podcastData} />;
}