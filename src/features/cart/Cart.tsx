import React, { useState } from 'react';
import styles from './Cart.module.css';

export function Cart() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8].map(x => x.toString());

  const item = (value: any) => <div className={styles.item}>
    <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg"/>
    <div className={styles.itemDescription}>
      <p>{"Title, Quantity, Price, Amount"}</p>
      <button className={styles.removeButton}>❌</button>
    </div>
  </div>

  return (
    <div className={styles.cart}>
      <h1 className={styles.header}>Cart</h1>
      <div className={styles.cartContainer}>
      {test.map(x => item(x))}
      </div>
      <div className={styles.totalContainer}>
        <h3>{"Total 0.00 PLN"}</h3>
      </div>
    </div>
  );
}
