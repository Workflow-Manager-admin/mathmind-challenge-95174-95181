import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Game state context
const GameContext = createContext(null);

// Initial game state
const initialState = {
  isPlaying: false,
  score: 0,
  timeRemaining: 60, // in seconds
  difficulty: 'easy', // easy, medium, hard
  currentProblem: null,
  userAnswer: '',
  problemHistory: [],
  highScore: 0
};

// Reducer for game state management
function gameReducer(state, action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        isPlaying: true,
        score: 0,
        timeRemaining: 60,
        problemHistory: [],
        currentProblem: action.payload.problem,
        userAnswer: ''
      };
    
    case 'END_GAME':
      const newHighScore = state.score > state.highScore ? state.score : state.highScore;
      return {
        ...state,
        isPlaying: false,
        highScore: newHighScore
      };
    
    case 'TICK':
      if (state.timeRemaining <= 0) {
        return {
          ...state,
          isPlaying: false,
          highScore: state.score > state.highScore ? state.score : state.highScore
        };
      }
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1
      };
    
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.payload
      };
    
    case 'UPDATE_ANSWER':
      return {
        ...state,
        userAnswer: action.payload
      };
    
    case 'SUBMIT_ANSWER':
      const isCorrect = Number(state.userAnswer) === state.currentProblem.answer;
      const scoreIncrement = isCorrect ? 
        (state.difficulty === 'easy' ? 1 : 
         state.difficulty === 'medium' ? 2 : 3) : 0;
      
      return {
        ...state,
        score: state.score + scoreIncrement,
        userAnswer: '',
        problemHistory: [
          ...state.problemHistory,
          {
            problem: state.currentProblem,
            userAnswer: state.userAnswer,
            isCorrect
          }
        ],
        currentProblem: action.payload.nextProblem
      };
    
    default:
      return state;
  }
}

// Game context provider component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  // Timer effect
  useEffect(() => {
    let timer = null;
    
    if (state.isPlaying && state.timeRemaining > 0) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [state.isPlaying, state.timeRemaining]);
  
  // Value object to be provided to consuming components
  const value = {
    ...state,
    startGame: (problem) => dispatch({ 
      type: 'START_GAME', 
      payload: { problem } 
    }),
    endGame: () => dispatch({ type: 'END_GAME' }),
    setDifficulty: (level) => dispatch({ 
      type: 'SET_DIFFICULTY', 
      payload: level 
    }),
    updateAnswer: (answer) => dispatch({ 
      type: 'UPDATE_ANSWER', 
      payload: answer 
    }),
    submitAnswer: (nextProblem) => dispatch({ 
      type: 'SUBMIT_ANSWER', 
      payload: { nextProblem } 
    })
  };
  
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook for using the game context
export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}
