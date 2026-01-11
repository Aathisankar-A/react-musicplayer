import React from "react";
import {lazy} from 'react';

const SuggestionArea = lazy(() => import("../../SuggestionArea/SuggestionArea"));

export default function ForYou() {
  return (
    <>
      <SuggestionArea />
    </>
  );
}