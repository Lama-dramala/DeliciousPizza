import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import NotFound from "./components/pages/NotFound";

import { InitializeCartItems } from "./redux/slices/cartSlice";

function App() {
  const dispatch = useDispatch();
  // Инициализация массива корзины из данных localStorage
  // Если инициализировать в компоненте Cart, то при обновлении страницы вне корзины они не будут подтягиваться
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
        <Route path="/" element={<Home />} />
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
