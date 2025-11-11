import React from "react";

import Logo from '../../assets/logo.svg?react';

import './LeftUpperPart.css';

export default function LeftUpperPart() {
  return(
    <div className="left-upper-part">
        <Logo className="logo"/>
        <h2> MusicPlayer </h2>
    </div>
  )
}