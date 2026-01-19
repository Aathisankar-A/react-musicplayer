import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../Context/SearchContext/SearchContext.jsx";

import './MiddleUpperPart.css';

export default function MiddleUpperPart() {
  const { setQuery } = useContext(SearchContext);

  return(
    <div className="middle-upper-part">
      <input
        className="search-bar"
        type="text"
        placeholder="Search songs, artists..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}