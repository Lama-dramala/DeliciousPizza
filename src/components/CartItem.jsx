import React from "react";
import { useDispatch } from "react-redux";

import { removeItem, changeCount } from "../redux/slices/cartSlice";

export default function CartItem({ props }) {
  const dispatch = useDispatch();
  return (
    <div className="cart_items_pizza">
      <div className="cart_items_pizza_content-wrap">
        <img src={props.img} alt="Изображение пиццы" className="cart_items_pizza_img" />
        <div className="cart_items_pizza_info">
          <h6 className="cart_items_pizza_title">{props.name}</h6>
          <span className="cart_items_pizza_properties">
            {(props.type == 0 ? "тонкое" : "традиционное") + " тесто"}, {props.size} см.
          </span>
        </div>
      </div>
      <div className="cart_items_pizza_quantity">
        <button
          className={props.count == 1 ? "disabled-cart-btn" : ""}
          onClick={() => dispatch(changeCount({ props, number: -1 }))}
        >
          <img src="img/minus-orange.svg" alt="" />
        </button>
        <span className="cart_items_pizza_quantity_number">{props.count}</span>
        <button onClick={() => dispatch(changeCount({ props, number: 1 }))}>
          <img src="img/plus-orange.svg" alt="" />
        </button>
      </div>
      <div className="cart_items_pizza_price">{props.price * props.count} ₽ </div>
      <button className="cart_items_pizza_remove-btn" onClick={() => dispatch(removeItem(props))}>
        +
      </button>
    </div>
  );
}
