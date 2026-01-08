import React from 'react';
import { lazy, Suspense } from "react";
import './App.css';

import UpperPart from '../UpperPart/UpperPart';
import LeftPanel from '../LeftPanel/LeftPanel';
import MiddlePanel from '../MiddlePanel/MiddlePanel';
const RightPanel = lazy(() => import("../RightPanel/RightPanel"));

function App() {
  return (
    <div className="app-div">
      <UpperPart/>
      <div className="center-part">
        <LeftPanel/>
        <MiddlePanel/>
        <Suspense fallback={<div className="loader">Loading queue...</div>}>
          <RightPanel />
        </Suspense>
      </div>
    </div>
  )
}

export default App