import React from "react";
import { lazy, Suspense } from "react";

import './MiddlePanel.css';

import RunningCard from '../RunningCard/RunningCard';
import PlayerControls from '../PlayerControls/PlayerControls';

import { useView } from "../../Context/ViewContext/ViewContext";

import ForYou from "../Menu/ForYou/ForYou";
import Podcast from "../Menu/Podcast/Podcast";
import Top50 from "../Menu/Top50/Top50";

const SuggestionArea = lazy(() => import("../SuggestionArea/SuggestionArea"));


export default function MiddlePanel() {
  const { currentView } = useView();

  return(
    <div className="middle-panel">
      <RunningCard/>
      <PlayerControls/>
      <Suspense fallback={<div className="loader">Loading songs...</div>}>
        {currentView === "for_you" && <ForYou />}
        {currentView === "podcast" && <Podcast />}
        {currentView === "top_50" && <Top50 />}
      </Suspense>
    </div>
  )
}