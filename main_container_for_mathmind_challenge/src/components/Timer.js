import React from 'react';
import { useGameContext } from '../context/GameContext';

/**
 * Timer component for displaying the remaining time in the game
 */
const Timer = () => {
  const { timeRemaining, isPlaying } = useGameContext();
  
  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className="timer">
      <div className="timer-label">Time Remaining</div>
      <div className="timer-value">{formatTime(timeRemaining)}</div>
      <div className="timer-progress">
        <div 
          className="timer-progress-bar" 
          style={{ 
            width: `${(timeRemaining / 60) * 100}%`,
            backgroundColor: timeRemaining < 10 ? '#ff4d4d' : '#4caf50'
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
