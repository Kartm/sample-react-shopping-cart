import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeCartItem,
  selectCartItems,
  // selectTotalPrice
} from "../shop/shopSlice";
import IProduct, { IProductGroup } from "../../models/product.interface";
import round from "lodash/round";

export function Cart() {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const totalPrice = round(items.reduce((accum, item) => accum + item.amount * item.price, 0), 2)

  const item = (product: IProductGroup) => {
    const itemTotalPrice = round(product.amount * product.price, 2);

    return (
      <div className={styles.item}>
        <img src={product.cover} />
        <div className={styles.itemDescription}>
          <p>{`${product.title}, ${product.amount} pcs., ${product.price} ${product.currency}, ${itemTotalPrice} ${product.currency}`}</p>
          <button
            className={styles.removeButton}
            onClick={() => dispatch(removeCartItem(product.id))}
          >
            ❌
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.cart}>
      <h1 className={styles.header}>Cart</h1>
      <div className={styles.cartContainer}>{items.map((x) => item(x))}</div>
      <div className={styles.totalContainer}>
        <h3>{`Total ${totalPrice} PLN`}</h3>
      </div>
    </div>
  );
}
