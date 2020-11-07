import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import shopReducer from "../features/shop/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
