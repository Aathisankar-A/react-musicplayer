import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import './MiddlePanel.css';

import RunningCard from '../RunningCard/RunningCard';
import PlayerControls from '../PlayerControls/PlayerControls';

// import { useView } from "../../Context/ViewContext/ViewContext";

import ForYou from "../Menu/ForYou/ForYou";
import Podcast from "../Menu/Podcast/Podcast";
import Top50 from "../Menu/Top50/Top50";

// const SuggestionArea = lazy(() => import("../SuggestionArea/SuggestionArea"));


export default function MiddlePanel() {
  // const { currentView } = useView();

  return(
    <div className="middle-panel">
      <RunningCard/>
      <PlayerControls/>
      <Suspense fallback={<div className="loader">Loading songs...</div>}>
        <Routes>
          <Route path="/" element={<ForYou />} />
          <Route path="/top50" element={<Top50 />} />
          <Route path="/podcasts" element={<Podcast />} />
        </Routes>
      </Suspense>
    </div>
  )
}