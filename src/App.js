import { useState } from "react";
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scors, setScores] = useState({ xScores: 0, oScores: 0 });
  const [gameOver, setGemOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "x" : "o";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "o") {
        let { oScores } = scors;
        oScores += 1;
        setScores({ ...scors, oScores });
      } else {
        let { xScores } = scors;
        xScores += 1;
        setScores({ ...scors, xScores });
      }
    }
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGemOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGemOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scors={scors} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
