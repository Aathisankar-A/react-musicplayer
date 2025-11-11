import React from "react";

import './UpperPart.css';
import LeftUpperPart from '../LeftUpperPart/LeftUpperPart';
import MiddleUpperPart from '../MiddleUpperPart/MiddleUpperPart';
import RightUpperPart from '../RightUpperPart/RightUpperPart';

export default function UpperPart() {
  return(
    <div className="upper-part">
      <LeftUpperPart/>
      <MiddleUpperPart/>
      <RightUpperPart/>
    </div>
  )
}