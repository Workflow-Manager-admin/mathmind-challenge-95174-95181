import React from 'react';
import { useGameContext } from '../context/GameContext';

/**
 * MathProblem component for displaying the current math problem and handling user input
 */
const MathProblem = () => {
  const { 
    isPlaying, 
    currentProblem, 
    userAnswer, 
    updateAnswer, 
    submitAnswer 
  } = useGameContext();
  
  const { generateRandomProblem } = require('../utils/mathProblems');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isPlaying && userAnswer !== '') {
      const nextProblem = generateRandomProblem();
      submitAnswer(nextProblem);
    }
  };
  
  const handleInputChange = (e) => {
    // Accept only numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    updateAnswer(value);
  };
  
  if (!isPlaying || !currentProblem) {
    return (
      <div className="math-problem math-problem-inactive">
        <h3>Problem will appear here</h3>
      </div>
    );
  }
  
  return (
    <div className="math-problem">
      <h2 className="problem-expression">{currentProblem.expression}</h2>
      <form onSubmit={handleSubmit} className="answer-form">
        <input
          type="text"
          className="answer-input"
          value={userAnswer}
          onChange={handleInputChange}
          placeholder="Your answer"
          autoFocus
        />
        <button type="submit" className="btn answer-submit">Submit</button>
      </form>
    </div>
  );
};

export default MathProblem;
