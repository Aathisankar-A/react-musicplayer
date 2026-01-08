import React from "react";
import { lazy, Suspense } from "react";

import './MiddlePanel.css';

import RunningCard from '../RunningCard/RunningCard';
import PlayerControls from '../PlayerControls/PlayerControls';
const SuggestionArea = lazy(() => import("../SuggestionArea/SuggestionArea"));


export default function MiddlePanel() {
  return(
    <div className="middle-panel">
      <RunningCard/>
      <PlayerControls/>
      <Suspense fallback={<div className="loader">Loading songs...</div>}>
        <SuggestionArea />
      </Suspense>
    </div>
  )
}