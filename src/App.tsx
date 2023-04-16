import React, { useEffect } from "react";
import Board from "./components/Board";
import { moveBelow, updateBoard } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createBoard } from "./utils/createBoard";
import {
  checkForRowOfFour,
  checkForRowOfThree,
  isColumnOfFour,
  isColumnOfThree,
} from "./utils/moveCheckLogic";
import {
  formulaForColumnOfFour,
  formulaForColumnOfThree,
  generateInvalidMoves,
} from "./utils/formulas";

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ fruitCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ fruitCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newBoard = [...board];
      isColumnOfFour(newBoard, boardSize, formulaForColumnOfFour(boardSize));
      checkForRowOfFour(
        newBoard,
        boardSize,
        generateInvalidMoves(boardSize, true)
      );
      isColumnOfThree(newBoard, boardSize, formulaForColumnOfThree(boardSize));
      checkForRowOfThree(newBoard, boardSize, generateInvalidMoves(boardSize));
      dispatch(updateBoard(newBoard));
      dispatch(moveBelow());
    }, 150);
    return () => clearInterval(timeout);
  }, [board, boardSize, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
