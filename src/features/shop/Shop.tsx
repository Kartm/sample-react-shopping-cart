import React from "react";
import { Cart } from "../cart/Cart";
import { Products } from "../products/Products";
import "./Shop.scss";

export function Shop() {
  return (
    <div className="shop">
      <Products />
      <Cart />
    </div>
  );
}
