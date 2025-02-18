import { useState } from "react"

import Player from "./componentts/Player";
import GameBoard from "./componentts/GameBoard";
import Log from "./componentts/log";
import GameOver from "./componentts/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./scripts/winning-combinations";

const PLAYERS = { X: "Player 1", O: "Player 2" };
const INITIAL_GAME_BOARD = [[null, null, null], [null, null, null], [null, null, null]];

function deriveActivePlayer(gameTurns) {
  let currentPlayerSymbol = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayerSymbol = 'O';
  }

  return currentPlayerSymbol;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare &&
      secondSquare === firstSquare &&
      thirdSquare === firstSquare) {
      winner = players[firstSquare];
    }
  }

  return winner;
}


function App() {
  const [player, setPlayer] = useState(PLAYERS);
  const [gameTurns, setGameTurn] = useState([]);

  const currentPlayerSymbol = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, player);
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch() {
    setGameTurn([]);
  }

  function handleEditPlayerName(symbol, newName) {
    setPlayer((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" isActive={currentPlayerSymbol === 'X'} onChangeName={handleEditPlayerName} />
          <Player initialName={PLAYERS.O} symbol="O" isActive={currentPlayerSymbol === 'O'} onChangeName={handleEditPlayerName} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
