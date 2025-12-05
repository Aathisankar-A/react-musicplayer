import { useContext } from "react";
import { SongContext } from "./SongContext";

export function useSong() {
  return useContext(SongContext);
}