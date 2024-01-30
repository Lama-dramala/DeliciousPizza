<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({}) {
  // Достаём данные из хранилища Redux
  const { totalPrice, cartItemsNumber } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <Link to="/" className="header_site-logo">
        <img src="img/site-logo.svg" alt="Логотип сайта" />
        <div className="header_site-logo_text">
          <span className="header_site-logo_text_wrap">DELICIOUS PIZZA</span>
          самая вкусная пицца во вселенной
        </div>
      </Link>
      <Link to="/cart" className="header_cart-button">
        <div className="header_cart-button_price">{totalPrice} ₽</div>
        <div className="header_cart-button_items">
          <img src="img/cart-icon.svg" alt="" />
          {cartItemsNumber}
        </div>
      </Link>
    </header>
  );
}
=======
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header({}) {
  // Достаём данные из хранилища Redux
  const { totalPrice, cartItemsNumber } = useSelector((state) => state.cart);

  return (
    <header className="header">
      <Link to="/" className="header_site-logo">
        <img src="img/site-logo.svg" alt="Логотип сайта" />
        <div className="header_site-logo_text">
          <span className="header_site-logo_text_wrap">DELICIOUS PIZZA</span>
          самая вкусная пицца во вселенной
        </div>
      </Link>
      <Link to="/cart" className="header_cart-button">
        <div className="header_cart-button_price">{totalPrice} ₽</div>
        <div className="header_cart-button_items">
          <img src="img/cart-icon.svg" alt="" />
          {cartItemsNumber}
        </div>
      </Link>
    </header>
  );
}
>>>>>>> d438e76 (Подключил git в VScode)
