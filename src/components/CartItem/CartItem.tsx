import React from "react";
import "./CartItem.scss";
import { IProductGroup } from "../../models/product.interface";
import round from "lodash/round";

type CartItemProps = {
  item: IProductGroup;
  onRemove: () => void;
};

export function CartItem({ item, onRemove }: CartItemProps) {
  const itemTotalPrice = round(item.amount * item.price, 2);
  const itemDescription = `${item.title}, ${
    item.amount
  } pcs., ${item.price.toFixed(2)} ${item.currency}, ${itemTotalPrice.toFixed(
    2
  )} ${item.currency}`;

  return (
    <div className="cart-item">
      <img src={item.cover} />
      <div className="description">
        <p>{itemDescription}</p>
        <button className="remove" onClick={() => onRemove()}>
          ❌
        </button>
      </div>
    </div>
  );
}
