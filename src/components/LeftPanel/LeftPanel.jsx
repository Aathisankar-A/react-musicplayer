import React from "react";

import './LeftPanel.css';

import Menu from '../Menu/Menu';
import Playlist from '../Playlist/Playlist';
import Library from '../Library/Library';

export default function  LeftPanel() {
  return (
    <div className="left-panel">
      <Menu/>
      <Playlist/>
      <Library/>
    </div>
  )
}