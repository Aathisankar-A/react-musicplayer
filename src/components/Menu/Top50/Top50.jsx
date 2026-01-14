// export default function Top50() {
//   return <h2 style={{ color: "white" }}>Top 50 Songs</h2>;
// }

import { useSong } from "../../../Context/SongContext/UseSong";
import SongGrid from "../../common/SongGrid";

export default function Top50() {
  const { songs } = useSong();

  // fake top 50 (later backend)
  const top50 = [...songs].reverse();

  return <SongGrid title="Top 50" songs={top50} />;
}
