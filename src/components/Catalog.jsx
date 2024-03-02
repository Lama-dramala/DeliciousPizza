import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Pizza from "./Pizza";
import PizzaSkeleton from "./PizzaSkeleton";

export default function Catalog({ pizzaList, onLoad }) {
  // Достаём данные из хранилища Redux
  const searchValue = useSelector((state) => state.filter.searchValue);

  // Переменная, которая по сути хранит массив актуальных для показа пицц
  const currentPizzaList = pizzaList.filter((pizza) =>
    pizza.name.toUpperCase().includes(searchValue.toUpperCase().trim())
  );

  // При возвращении с корзины пользователя будет всегда кидать наверх каталога,
  // а не на ту же высоту скрола, что была в корзине
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="catalog-wrap">
      <h1 className="catalog_h1">Все Пиццы</h1>
      <div className="catalog">
        {onLoad ? (
          // До загрузки отрисовываем заглушку
          [...new Array(8)].map((_, index) => <PizzaSkeleton key={index} />)
        ) : currentPizzaList.length > 0 ? (
          currentPizzaList.map((pizza) => <Pizza props={pizza} key={pizza.id} />)
        ) : (
          <span className="catalog_empty"> Ничего не найдено </span>
        )}
      </div>
    </div>
  );
}
