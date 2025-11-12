import React from "react";

import './MiddlePanel.css';

import RunningCard from '../RunningCard/RunningCard';
import SuggestionArea from '../SuggestionArea/SuggestionArea';
import PlayerControls from '../PlayerControls/PlayerControls';

export default function MiddlePanel() {
  return(
    <div className="middle-panel">
      <RunningCard/>
      <PlayerControls/>
      <SuggestionArea/>
    </div>
  )
}