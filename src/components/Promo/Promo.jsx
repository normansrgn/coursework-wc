import React from "react";
import "./promo.scss";

export default function Promo() {
  return (
    <>
      <div className="promo">
        <h2 className="promo__title">Исследуй виртуальную реальность</h2>
        <div>
          Виртуальная реальность может быть веселой, но это также может быть
          очень страшной. Проведи свое время незабываемо в VR-клубе.
        </div>
        <div className="promo__buttons">
          <button className="promo__btnFirst">Выбрать игру</button>
          <button className="promo__btnSecond">Наши цены</button>
        </div>
      </div>
    </>
  );
}
