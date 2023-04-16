import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";

const initialState: {
  board: string[];
  boardSize: number;
} = {
  board: [],
  boardSize: 8,
};

const fruitCrushSlice = createSlice({
  name: "fruitCrush",
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
    moveBelow: moveBelowReducer,
  },
});

export const store = configureStore({
  reducer: {
    fruitCrush: fruitCrushSlice.reducer,
  },
});

export const { updateBoard, moveBelow } = fruitCrushSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
