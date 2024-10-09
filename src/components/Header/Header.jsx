import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        W<span>R</span>eality
      </div>

      <div className="header__contacts">
        <ol className="header__contactList">
          <li className="header__contactItem">О клубе</li>
          <li className="header__contactItem">Залы</li>
          <li className="header__contactItem">Игры</li>
          <li className="header__contactItem">Контакты</li>
        </ol>

        <div className="header__Bron">
          <button>Забронировать</button>
          <div className="header__bronNumb">8 (925)880-15-12</div>
        </div>
      </div>
    </div>
  );
}
