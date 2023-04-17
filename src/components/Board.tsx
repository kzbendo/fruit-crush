import React from "react";
import { useAppSelector } from "../store/hooks";
import Tile from "./Tile";

function Board() {
  const board = useAppSelector(({ fruitCrush: { board } }) => board);
  const boardSize = useAppSelector(
    ({ fruitCrush: { boardSize } }) => boardSize
  );
  return (
    <div
      className="flex flex-wrap rounded-lg fixed"
      style={{
        width: `${6.25 * boardSize}rem`,
      }}
    >
      {board.map((fruit: string, index: number) => (
        <Tile fruit={fruit} key={index} fruitId={index} />
      ))}
    </div>
  );
}

export default Board;
