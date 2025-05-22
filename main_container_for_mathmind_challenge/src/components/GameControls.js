import React from 'react';
import { useGameContext } from '../context/GameContext';
import { generateRandomProblem } from '../utils/mathProblems';

/**
 * GameControls component for managing game flow (start, end, difficulty)
 */
const GameControls = () => {
  const { 
    isPlaying, 
    startGame, 
    endGame, 
    difficulty, 
    setDifficulty 
  } = useGameContext();
  
  const handleStartGame = () => {
    const firstProblem = generateRandomProblem(difficulty);
    startGame(firstProblem);
  };
  
  const handleEndGame = () => {
    endGame();
  };
  
  const handleDifficultyChange = (e) => {
    setDifficulty(e.target.value);
  };
  
  return (
    <div className="game-controls">
      {!isPlaying ? (
        <>
          <select
            value={difficulty}
            onChange={handleDifficultyChange}
            className="difficulty-select"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button 
            className="btn btn-large start-btn" 
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </>
      ) : (
        <button 
          className="btn btn-large end-btn" 
          onClick={handleEndGame}
        >
          End Game
        </button>
      )}
    </div>
  );
};

export default GameControls;
