import { useState } from "react"

import Player from "./componentts/Player"
import GameBoard from "./componentts/GameBoard"
import Log from "./componentts/log"

function deriveActivePlayer(gameTurns) {
  let currentPlayerSymbol = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayerSymbol = 'O';
  }

  return currentPlayerSymbol;
}

function App() {
  const [gameTurns, setGameTurn] = useState([]);

  const currentPlayerSymbol = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer
        }, ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={currentPlayerSymbol === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayerSymbol === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
