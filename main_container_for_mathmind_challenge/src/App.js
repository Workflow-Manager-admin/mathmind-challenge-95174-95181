import React from 'react';
import './App.css';
import GameArea from './components/GameArea';
import { GameProvider } from './context/GameContext';

/**
 * MathMind Challenge - Main Container
 * An engaging math puzzle game that challenges players to solve 
 * mathematical equations within a time limit.
 */
function App() {
  return (
    <GameProvider>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">✓</span> MathMind Challenge
              </div>
            </div>
          </div>
        </nav>

        <main>
          <div className="container">
            <div className="hero">
              <div className="subtitle">Test Your Mathematical Skills</div>
              
              <h1 className="title">MathMind Challenge</h1>
              
              <div className="description">
                Solve mathematical equations and mental math problems within the time limit.
                Challenge yourself and improve your math skills, quick thinking, and problem-solving abilities.
              </div>
              
              <GameArea />
            </div>
          </div>
        </main>
        
        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} MathMind Challenge | Powered by KAVIA AI</p>
          </div>
        </footer>
      </div>
    </GameProvider>
  );
}

export default App;
