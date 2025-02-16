import { useState } from "react"

import Player from "./componentts/Player"
import GameBoard from "./componentts/GameBoard"
import Log from "./componentts/log"

function App() {
  const [gameTurns, setGameTurn] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setCurrentPlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurn((prevTurns) => {
      let currentPlayerSymbol = currentPlayer === 'X' ? 'X' : 'O';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayerSymbol = 'O';
      }
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayerSymbol
        }, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
