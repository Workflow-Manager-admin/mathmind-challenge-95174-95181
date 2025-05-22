import React from 'react';
import { useGameContext } from '../context/GameContext';
import MathProblem from './MathProblem';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';
import GameControls from './GameControls';

/**
 * GameArea component that serves as the main container for game elements
 */
const GameArea = () => {
  const { isPlaying, problemHistory } = useGameContext();
  
  return (
    <div className="game-area">
      <div className="game-header">
        <ScoreBoard />
        <Timer />
      </div>
      
      <div className="game-content">
        <MathProblem />
      </div>
      
      <div className="game-footer">
        <GameControls />
      </div>
      
      {isPlaying && problemHistory.length > 0 && (
        <div className="last-answer">
          {problemHistory[problemHistory.length - 1].isCorrect ? (
            <span className="correct">Correct!</span>
          ) : (
            <span className="incorrect">
              Incorrect! The correct answer was {problemHistory[problemHistory.length - 1].problem.answer}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default GameArea;
