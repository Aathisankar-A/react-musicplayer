import React from "react";

import './MiddleUpperPart.css';

export default function LeftUpperPart() {
  return(
    <div className="middle-upper-part">
      <input
        className="search-bar"
        type="text"
        placeholder="Search songs, artists..."
      />
    </div>
  )
}