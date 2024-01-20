import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2 className="not-found_h2">Данная страница отсутствует</h2>
      <span className="not-found_content">
        Возможно вы перешли по неверно набранной ссылке или данная страница была удалена
      </span>
      <Link to="/" className="not-found_return">
        Перейти на главную страницу
      </Link>
    </div>
  );
}
