import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './npindex.css';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="app">
      <h1>Jogo de continhas</h1>
      <div className="math-game">
        {gameStarted ? (
          <>
            <input type="text" />
            <span>7 x 8</span>
          </>
        ) : (
          <button onClick={() => setGameStarted(true)}>Iniciar jogo</button>
        )}
      </div>
      {gameStarted && (
        <button onClick={() => setGameStarted(false)} className="stop-button">
          Encerrar jogo
        </button>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
