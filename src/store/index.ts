import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./reducers/moveBelow";
import { dragEndReducer } from "./reducers/dragEnd";

const initialState: {
  board: string[];
  boardSize: number;
  squareBeingReplaced: Element | undefined;
  squareBeingDragged: Element | undefined;
} = {
  board: [],
  boardSize: 8,
  squareBeingReplaced: undefined,
  squareBeingDragged: undefined,
};

const fruitCrushSlice = createSlice({
  name: "fruitCrush",
  initialState,
  reducers: {
    updateBoard: (state, action: PayloadAction<string[]>) => {
      state.board = action.payload;
    },
    dragStart: (state, action: PayloadAction<any>) => {
      state.squareBeingDragged = action.payload;
    },
    dragDrop: (state, action: PayloadAction<any>) => {
      state.squareBeingReplaced = action.payload;
    },
    dragEnd: dragEndReducer,
    moveBelow: moveBelowReducer,
  },
});

export const store = configureStore({
  reducer: {
    fruitCrush: fruitCrushSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { updateBoard, moveBelow, dragStart, dragDrop, dragEnd } =
  fruitCrushSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
