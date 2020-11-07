import React from "react";
import "./Products.scss";

import { useSelector, useDispatch } from "react-redux";
import { addCartItem, selectShopProducts } from "../shop/shopSlice";
import { ProductItem } from "../../components/ProductItem/ProductItem";

export function Products() {
  const products = useSelector(selectShopProducts);
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h1 className="header">Products</h1>
      <div className="container">
        {products.map((item) => <ProductItem item={item} onAdd={() => dispatch(addCartItem(item.id))}/>)}
      </div>
    </div>
  );
}
