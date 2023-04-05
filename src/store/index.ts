import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const store = configureStore({
  reducer: {
    fruitCrush: fruitCrushSlice.reducer,
  },
});

export const { updateBoard } = fruitCrushSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
