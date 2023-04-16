import { fruits } from "./fruitData";

export const isColumnOfFour = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfFour: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfFour; i++) {
    const columnOfFour: number[] = [
      i,
      i + boardSize,
      i + boardSize * 2,
      i + boardSize * 3,
    ];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";

    if (
      columnOfFour.every(
        (fruit: number) => newBoard[fruit] === decidedColor && !isBlank
      )
    ) {
      columnOfFour.forEach((fruit: number) => (newBoard[fruit] = ""));
      return true;
    }
  }
};

export const isColumnOfThree = (
  newBoard: string[],
  boardSize: number,
  formulaForColumnOfThree: number
) => {
  for (let i: number = 0; i <= formulaForColumnOfThree; i++) {
    const columnOfThree: number[] = [i, i + boardSize, i + boardSize * 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";

    if (
      columnOfThree.every(
        (fruit: number) => newBoard[fruit] === decidedColor && !isBlank
      )
    ) {
      columnOfThree.forEach((fruit: number) => (newBoard[fruit] = ""));
      return true;
    }
  }
};

export const checkForRowOfFour = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfFour = [i, i + 1, i + 2, i + 3];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfFour.every(
        (fruit: number) => newBoard[fruit] === decidedColor && !isBlank
      )
    ) {
      rowOfFour.forEach((fruit: number) => (newBoard[fruit] = ""));
      return true;
    }
  }
};

export const checkForRowOfThree = (
  newBoard: string[],
  boardSize: number,
  invalidMoves: number[]
) => {
  for (let i: number = 0; i < boardSize * boardSize; i++) {
    const rowOfThree = [i, i + 1, i + 2];
    const decidedColor: string = newBoard[i];
    const isBlank: boolean = newBoard[i] === "";
    if (invalidMoves.includes(i)) continue;
    if (
      rowOfThree.every(
        (fruit: number) => newBoard[fruit] === decidedColor && !isBlank
      )
    ) {
      rowOfThree.forEach((fruit: number) => (newBoard[fruit] = ""));
      return true;
    }
  }
};
