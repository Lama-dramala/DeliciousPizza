<<<<<<< HEAD
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/slices/cartSlice";

export default function Pizza({ props }) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(props.sizes[0]);

  function addToCart() {
    const item = {
      id: props.id,
      img: props.img,
      name: props.name,
      type: activeType,
      size: activeSize,
      price: props.price,
      count: 0,
    };
    dispatch(addItem(item));
  }

  return (
    <div className="catalog_pizza">
      <img src={props.img} alt="Изображение пиццы" className="catalog_pizza_img" />
      <h4 className="catalog_pizza_name">{props.name}</h4>
      <div className="catalog_pizza_select-wrap">
        <ul className="catalog_pizza_thickness-select">
          {props.types.map((type, i) => (
            <li className={activeType == i ? "active" : ""} onClick={() => setActiveType(i)} key={type}>
              {type == 0 ? "тонкое" : "традиционное"}
            </li>
          ))}
        </ul>
        <ul className="catalog_pizza_size-select">
          {props.sizes.map((size) => (
            <li className={activeSize == size ? "active" : ""} onClick={() => setActiveSize(size)} key={size}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog_pizza_bottom">
        <span className="catalog_pizza_bottom_price">от {props.price} ₽</span>
        <button className="catalog_pizza_bottom_add-to-cart" onClick={addToCart}>
          + Добавить
        </button>
      </div>
    </div>
  );
}
=======
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/slices/cartSlice";

export default function Pizza({ props }) {
  const dispatch = useDispatch();

  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(props.sizes[0]);

  function addToCart() {
    const item = {
      id: props.id,
      img: props.img,
      name: props.name,
      type: activeType,
      size: activeSize,
      price: props.price,
      count: 0,
    };
    dispatch(addItem(item));
  }

  return (
    <div className="catalog_pizza">
      <img src={props.img} alt="Изображение пиццы" className="catalog_pizza_img" />
      <h4 className="catalog_pizza_name">{props.name}</h4>
      <div className="catalog_pizza_select-wrap">
        <ul className="catalog_pizza_thickness-select">
          {props.types.map((type, i) => (
            <li className={activeType == i ? "active" : ""} onClick={() => setActiveType(i)} key={type}>
              {type == 0 ? "тонкое" : "традиционное"}
            </li>
          ))}
        </ul>
        <ul className="catalog_pizza_size-select">
          {props.sizes.map((size) => (
            <li className={activeSize == size ? "active" : ""} onClick={() => setActiveSize(size)} key={size}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog_pizza_bottom">
        <span className="catalog_pizza_bottom_price">от {props.price} ₽</span>
        <button className="catalog_pizza_bottom_add-to-cart" onClick={addToCart}>
          + Добавить
        </button>
      </div>
    </div>
  );
}
>>>>>>> d438e76 (Подключил git в VScode)
