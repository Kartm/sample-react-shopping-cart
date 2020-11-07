import React from 'react';
import styles from './Products.module.css';

import IProduct from '../../models/product.interface';
import { useSelector, useDispatch } from 'react-redux';
import {
  addCartItem,
  selectShopProducts,
} from '../shop/shopSlice';

export function Products() {
  const products = useSelector(selectShopProducts);
  const dispatch = useDispatch();

  const item = (product: IProduct) => <div className={styles.item}>
    <img src={product.cover}/>
    <div className={styles.itemDescription}>
    <p>{product.title}</p>
    {product.availability && <p>{`${product.price} ${product.currency}`}</p>}
    {product.availability && <button className={styles.addButton} onClick={() => dispatch(addCartItem(product.id))}>{"Add to cart"}</button>}
    </div>
  </div>

  return (
    <div className={styles.products}>
      <h1 className={styles.header}>Products</h1>
      <div className={styles.productContainer}>
      {products.map(x => item(x))}
      </div>
    </div>
  );
}
