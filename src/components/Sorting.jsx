import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearch } from "../redux/slices/filterSlice";

export default function Sorting({ activeCategory, setActiveCategory, activeSort, setActiveSort }) {
  // Достаём данные из хранилища Redux
  const searchValue = useSelector((state) => state.filter.searchValue);
  const dispatch = useDispatch();

  // Категории
  const categories = [
    { name: "Все", id: 0 },
    { name: "Мясные", id: 1 },
    { name: "Вегетарианские", id: 2 },
    { name: "Гриль", id: 3 },
    { name: "Острые", id: 4 },
    { name: "Закрытые", id: 5 },
  ];

  // Опции
  const options = [
    { title: "популярности", sortType: "rating", id: 1 },
    { title: "цене", sortType: "price", id: 2 },
    { title: "алфавиту", sortType: "name", id: 3 },
  ];

  // Показ и скрытие popUp'а
  const [optionsIsActive, setOptionsIsActive] = useState(false);
  const sortDropdownRef = useRef();
  useEffect(() => {
    function handleClick(event) {
      if (!event.composedPath().includes(sortDropdownRef.current)) {
        setOptionsIsActive(false);
      }
    }
    document.body.addEventListener("click", handleClick);
    // Делает так, что после пропадания компонента Sorting, пропадает и слушатель события
    // Если не убирать слушатель, то он будет навешиваться каждый раз при отрисовке компонента
    // ( например при переходе с корзины на главную) и в какой-то момет у нас может быть 100 обработчиков клика
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  // Показ и скрытие сортировки и поиска
  const [isSortHidden, setIsSortHidden] = useState(true);
  function toggleSort() {
    setIsSortHidden(!isSortHidden);
  }

  return (
    <div>
      <div className="expend-sort">
        <span>Сортировка и поиск</span>
        <button onClick={toggleSort}>
          <img src="img/burger-menu.png" alt="Показать опции сортировки" />
        </button>
      </div>
      <div id="sortingAndSearch" className={isSortHidden ? "hidden" : ""}>
        <div className="sorting">
          <ul className="sorting_categories">
            {categories.map((category) => (
              <li
                className={activeCategory == category.id ? "active" : ""}
                onClick={() => setActiveCategory(category.id)}
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
          <div ref={sortDropdownRef} className="sorting_dropdown">
            Сортировать по:
            <span
              className="sorting_dropdown_current-option"
              onClick={() => setOptionsIsActive(!optionsIsActive)}
            >
              {activeSort.title}
            </span>
            {optionsIsActive && (
              <ul className="sorting_dropdown_options">
                {options.map((option) => (
                  <li
                    onClick={() => {
                      setActiveSort(option);
                      setOptionsIsActive(false);
                    }}
                    key={option.id}
                  >
                    {option.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="search">
          <img src="img/search.svg" alt="" />
          <input
            onChange={(e) => dispatch(setSearch(e.target.value))}
            value={searchValue}
            className="search_input"
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <button onClick={() => dispatch(setSearch(""))} className="search_close-btn">
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
