import React from 'react';
import s from './Sidebar.module.scss';
import {NavLink} from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className={s.sidebar}>
      <ul className={s.nav}>
        <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
        <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
};