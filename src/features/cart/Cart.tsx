import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem, selectCartItems } from "../shop/shopSlice";
import round from "lodash/round";
import { CartItem } from "../../components/CartItem/CartItem";

export function Cart() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const totalPrice = round(
    items.reduce((accum, item) => accum + item.amount * item.price, 0),
    2
  );

  return (
    <div className="cart">
      <h1 className="header">Cart</h1>
      {items.length > 0 ? (
        <>
          <div className="container">
            {items.map((item) => <CartItem item={item} onRemove={() => dispatch(removeCartItem(item.id))} />)}
          </div>
          <div className="total">
            <h3>{`Total ${totalPrice} PLN`}</h3>
          </div>
        </>
      ) : (
        <h2 className="empty">{"Cart is empty"}</h2>
      )}
    </div>
  );
}
