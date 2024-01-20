import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { clearItems } from "../redux/slices/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  // Достаём данные из хранилища Redux
  const { cartItems, cartItemsNumber, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length > 0 ? (
        <div className="cart">
          <div className="cart_top">
            <div className="cart_top_left">
              <img src="img/cart-icon-2.svg" alt="" />
              <h2>Корзина</h2>
            </div>
            <button className="cart_top_right" onClick={() => dispatch(clearItems())}>
              <img src="img/trash-bag-icon.svg" alt="" />
              <span>Очистить корзину</span>
            </button>
          </div>
          <div className="cart_items">
            {cartItems.map((pizza) => (
              <CartItem
                props={pizza}
                key={pizza.id.toString() + pizza.type.toString() + pizza.size.toString()}
              />
            ))}
          </div>
          <div className="cart_order-info">
            <span className="cart_order-info_left">
              Всего пицц: <span className="cart_order-info_left_number">{cartItemsNumber} шт.</span>
            </span>
            <span className="cart_order-info_right">
              Сумма заказа: <span className="cart_order-info_right_sum">{totalPrice} ₽</span>
            </span>
          </div>
          <div className="cart_bottom">
            <Link to="/" className="cart_bottom_return">
              <img src="img/arrow.svg" alt="" />
              <span> Вернуться назад</span>
            </Link>
            <button className="cart_bottom_buy">
              <span> Оплатить сейчас</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <h3 className="cart-empty_title">Корзина пустая </h3>
          <span className="cart-empty_text">
            Вероятней всего, вы ещё не заказывали пиццу. <br />
            Для того, чтобы заказать пиццу, перейдите на главную страницу.
          </span>
          <img src="img/empty-cart.png" className="cart-empty_img" />
          <Link to="/" className="cart-empty_link">
            Вернуться назад
          </Link>
        </div>
      )}
    </div>
  );
}
