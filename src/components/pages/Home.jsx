import { useEffect, useState } from "react";
import axios from "axios";

import Sorting from "../Sorting";
import Catalog from "../Catalog";

export default function Home() {
  const [onLoad, setOnLoad] = useState(true);

  // Сортировка
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSort, setActiveSort] = useState({ title: "популярности", sortType: "rating" });

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

  return (
    <div>
      <Sorting
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />
      <Catalog pizzaList={pizzaList} onLoad={onLoad} />
    </div>
  );
}
