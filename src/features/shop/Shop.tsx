import React, { useState } from 'react';
import { Cart } from '../cart/Cart';
import { Products } from '../products/Products';
import styles from './Shop.module.css';

export function Shop() {

  return (
    <div className={styles.container}>
      <Products />
        <Cart />
      </div>
  );
}
