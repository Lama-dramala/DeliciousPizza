import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Header from "./components/Header";
import Sorting from "./components/Sorting";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { InitializeCartItems } from "./redux/slices/cartSlice";
<<<<<<< HEAD
=======
// Hi
>>>>>>> d438e76 (Подключил git в VScode)

export const AppContext = React.createContext({});

function App() {
  const dispatch = useDispatch();

  const [onLoad, setOnLoad] = useState(true);

  // Сортировка
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({ title: "популярности", sortType: "rating", id: 1 });

  // Запрос данных с бэкенда
  const [pizzaList, setPizzaList] = useState([]);
  useEffect(() => {
    setOnLoad(true);
    // Переменные для более компактной записи fetch'а
    const category = activeCategory !== 0 ? `category=${activeCategory}` : ``;
    const sort = activeSort.sortType;
    const isRating = activeSort.sortType == "rating" ? `&order=desc` : ``;
    axios
      .get(`https://659400c91493b0116069aeba.mockapi.io/pizzas?${category}&sortBy=${sort}${isRating}`)
      .then((res) => {
        setPizzaList(res.data);
        setOnLoad(false);
      })
      .catch((err) => {
        alert("Ошибка: Не удалось получить данные");
        console.log(err);
      });
  }, [activeCategory, activeSort]);

  // Инициализация массива корзины из данных localStorage
  const [cartIsLoading, setCartIsLoading] = useState(true);
  useEffect(() => {
    setCartIsLoading(true);
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      dispatch(InitializeCartItems(cartItems));
    }
    setCartIsLoading(false);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Sorting
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
              />
              <Catalog pizzaList={pizzaList} onLoad={onLoad} />
            </div>
          }
        />
        <Route
          path="/cart"
          element={cartIsLoading ? <div className="cart_loading">Загрузка...</div> : <Cart />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
