import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import IProduct, { IProductGroup } from "../../models/product.interface";
import countBy from "lodash/countBy";
import lodashMap from "lodash/map";
import dataJson from "../../items.json";

interface ShopState {
  cartItemIds: number[];
}

const initialState: ShopState = { cartItemIds: [] };

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCartItem(state, action: PayloadAction<number>) {
      state.cartItemIds.push(action.payload);
    },
    removeCartItem(state, action: PayloadAction<number>) {
      state.cartItemIds = state.cartItemIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { addCartItem, removeCartItem } = shopSlice.actions;

export const selectShopProducts = (state: RootState) => {
  return dataJson as IProduct[];
};
export const selectCartItems = (state: RootState) => {
  const data = state.shop.cartItemIds;

  return lodashMap(
    countBy(data, (id) => id),
    (count, id) => {
      const item = dataJson.find((item) => item.id === +id);
      return { ...item, amount: count } as IProductGroup;
    }
  );
};
// export const selectTotalPrice = (state: RootState) =>
//   selectCartItems(state).reduce((accum, currentVal) => accum + currentVal.price, 0);

export default shopSlice.reducer;
