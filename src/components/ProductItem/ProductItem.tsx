import React from "react";
import "./ProductItem.scss";
import IProduct from "../../models/product.interface";

type ProductItemProps = {
  item: IProduct,
  onAdd: () => void
}

export function ProductItem({item, onAdd}: ProductItemProps) {
  return (
    <div className="product-item">
      <img src={item.cover} />
      <div className="description">
        <p>{item.title}</p>
        {item.availability && (
          <p>{`${item.price} ${item.currency}`}</p>
        )}
        {item.availability && (
          <button
            className="add"
            onClick={() => onAdd()}
          >
            {"Add to cart"}
          </button>
        )}
      </div>
    </div>
  );
}
