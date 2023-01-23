import React from "react";
import "./ScoreBoard.css";

export default function ScoreBoard(scores, xPlaying) {
  const { xScores, oScores } = scores;
  return <div className="scoreboard">
    <span className={`score x-score ${!xPlaying && 'inactive'}`} >X - {xScores}</span>
    <span className={`score o-score ${xPlaying && 'inactive'}`} >o - {oScores}</span>
  </div>;
}
