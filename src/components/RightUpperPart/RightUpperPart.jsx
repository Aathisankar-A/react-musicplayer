import React from "react";

import Notification from '../../assets/notification.svg?react';
import Profile from '../../assets/profile.svg?react';
// import { ReactComponent as Profile } from "../../assets/profile.svg";

import './RightUpperPart.css';

export default function RightUpperPart() {
  return(
    <div className="right-upper-part">
      <Notification className="notification-icon"/>
      <Profile className="profile-icon"/>
    </div>
  )
}