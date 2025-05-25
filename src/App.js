import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>It is Impossible to Imagine What is Impossible.</h1>
        <p>웹 백엔드 개발자 조정현의 포트폴리오입니다!</p>
        <div className="forest-container">
          <svg className="leaf leaf1" viewBox="0 0 100 100" width="50" height="50">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#2d5a3f" />
          </svg>
          <svg className="leaf leaf2" viewBox="0 0 100 100" width="50" height="50">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#1a472a" />
          </svg>
          <svg className="leaf leaf3" viewBox="0 0 100 100" width="50" height="50">
            <path d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z" fill="#2d5a3f" />
          </svg>
        </div>
      </header>
    </div>
  );
}

export default App; 