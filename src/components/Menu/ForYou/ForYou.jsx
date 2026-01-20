// import React from "react";
// import {lazy} from 'react';

// const SuggestionArea = lazy(() => import("../../SuggestionArea/SuggestionArea"));

// export default function ForYou() {
//   return (
//     <>
//       <SuggestionArea />
//     </>
//   );
// }


import {lazy} from 'react';
import { useSong } from "../../../Context/SongContext/UseSong";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext/SearchContext.jsx";
// import SongGrid from "../../common/SongGrid";
const SongGrid = lazy(() => import("../../common/SongGrid"));

export default function ForYou() {
  const { songs } = useSong();
  const { query } = useContext(SearchContext);

  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return <SongGrid title="For You" songs={filteredSongs} />;
}
