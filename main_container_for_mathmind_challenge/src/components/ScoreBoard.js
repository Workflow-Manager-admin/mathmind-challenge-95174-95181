import React from 'react';
import { useGameContext } from '../context/GameContext';

/**
 * ScoreBoard component for displaying the player's current and high score
 */
const ScoreBoard = () => {
  const { score, highScore } = useGameContext();
  
  return (
    <div className="scoreboard">
      <div className="score-container">
        <div className="score-label">Current Score</div>
        <div className="score-value">{score}</div>
      </div>
      <div className="score-container">
        <div className="score-label">High Score</div>
        <div className="score-value">{highScore}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
