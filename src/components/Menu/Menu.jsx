import React from "react";
import { Link } from "react-router-dom";
  
// import { useView } from "../../Context/ViewContext/ViewContext";

import './Menu.css';

export default function Menu() {
  // const { setCurrentView } = useView();

  return (
    <div className="menu">
      <h2>
        <em> Menu </em>
      </h2>
      <h4><Link to="/">For You</Link></h4>
      <h4><Link to="/top50">Top 50</Link></h4>
      <h4><Link to="/podcasts">Podcasts</Link></h4>
    </div>
  )
}