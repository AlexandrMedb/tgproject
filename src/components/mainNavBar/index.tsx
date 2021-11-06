import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";

import { reduceHomePath } from "../../route/pathReducers";

import { ImpLink } from "../impLink";

export const MainNavBar = () => {
  return (
    <div className={style.container}>
      <nav className={style.navBar}>
        <div className={style.left}>
          <NavLink to={reduceHomePath()}>
            <img src="./img/Owlbear_logo.png" alt="logo" />
          </NavLink>
          <NavLink to="/gmLanding">Для мастеров</NavLink>
          <NavLink to="/playerLanding">Для игроков</NavLink>
          <NavLink to="/pricing">Цены</NavLink>
          <NavLink to="/help">Помощь</NavLink>
        </div>

        <div className={style.right}>
          <NavLink to="/news">Что нового?</NavLink>
          <ImpLink to="/login" text="Вернуться в приключение" />
        </div>
      </nav>
    </div>
  );
};
