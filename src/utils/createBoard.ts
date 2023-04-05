import { fruits } from "./fruitData";

export const createBoard = (boardSize: number = 8) =>
  Array(boardSize * boardSize)
    .fill(null)
    .map(() => fruits[Math.floor(Math.random() * fruits.length)]);
