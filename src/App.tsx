import React, { useEffect } from "react";
import Board from "./components/Board";
import { updateBoard } from "./store";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { createBoard } from "./utils/createBoard";

function App() {
  const dispatch = useAppDispatch();
  const board = useAppSelector(({ fruitCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ fruitCrush: { boardSize } }) => boardSize
  );

  useEffect(() => {
    dispatch(updateBoard(createBoard(boardSize)));
  }, [boardSize, dispatch]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Board />
    </div>
  );
}

export default App;
