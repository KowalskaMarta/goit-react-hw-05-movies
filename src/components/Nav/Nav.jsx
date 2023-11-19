import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

export const Nav = () => {
  return (
    <header>
      <div className={css.mainContainer}>
        <nav className={css.mainNavigation}>
          <NavLink className={css.mainLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.mainLink}  to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
};