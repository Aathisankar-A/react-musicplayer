import React from "react";
import { useView } from "../../Context/ViewContext/ViewContext";

import './Menu.css';

export default function Menu() {
  const { setCurrentView } = useView();

  return (
    <div className="menu">
      <h2> 
        <em> Menu </em>
      </h2>
      <h4 onClick={() => setCurrentView("for_you")}>For You</h4>
      <h4 onClick={() => setCurrentView("top_50")}>Top 50</h4>
      <h4 onClick={() => setCurrentView("podcast")}>Podcasts</h4>
    </div>
  )
}