import React from 'react';
import './App.css';

import UpperPart from '../UpperPart/UpperPart';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
import MiddlePanel from '../MiddlePanel/MiddlePanel';

function App() {
  return (
    <div className="app-div">
      <UpperPart/>
      <div className="center-part">
        <LeftPanel/>
        <MiddlePanel/>
        <RightPanel/>
      </div>
    </div>
  )
}

export default App