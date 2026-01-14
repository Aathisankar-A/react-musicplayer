import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePlayerUI } from "../../Context/PlayerUIContext/PlayerUIContext.jsx";

import './MiddlePanel.css';

import RunningCard from '../RunningCard/RunningCard';
import PlayerControls from '../PlayerControls/PlayerControls';

// import { useView } from "../../Context/ViewContext/ViewContext";

import ForYou from "../Menu/ForYou/ForYou";
import Podcast from "../Menu/Podcast/Podcast";
import Top50 from "../Menu/Top50/Top50";


export default function MiddlePanel() {
  // const { currentView } = useView();
  const location = useLocation();
  const { setIsMiniPlayer } = usePlayerUI();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/for-you") {
      setIsMiniPlayer(false);
    } else {
      setIsMiniPlayer(true);
    }
  }, [location.pathname]);

  return(
    <div className="middle-panel">
      <RunningCard/>
      <PlayerControls/>
      <div className="middle-scroll">
        <Suspense fallback={<div className="loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<ForYou />} />
            <Route path="/top50" element={<Top50 />} />
            <Route path="/podcasts" element={<Podcast />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}