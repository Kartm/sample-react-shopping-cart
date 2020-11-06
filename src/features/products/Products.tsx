import React, { useState } from 'react';
import styles from './Products.module.css';

export function Products() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8].map(x => x.toString());

  const item = (value: any) => <div className={styles.item}>
    <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co233r.jpg"/>
    <div className={styles.itemDescription}>
    <p>{"Title"}</p>
    <p>{"Price"}</p>
    <button>{"Add to cart"}</button>
    </div>
  </div>

  return (
    <div className={styles.products}>
      <h1 className={styles.header}>Products</h1>
      <div className={styles.productContainer}>
      {test.map(x => item(x))}
      </div>
    </div>
  );
}
