import React from 'react';
import { NavLink } from "react-router-dom";
import { Search } from './search/search';
import styles from './navbar.module.css';

export function Navbar () {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
            <li className={styles.listItem}>
            <NavLink to ='/home' activeStyle={{ backgroundColor: "#b99a02" }}>Home </NavLink>
            <NavLink to ='/create_game' activeStyle={{ backgroundColor: "#b99a02" }}>Create a game</NavLink>
            <NavLink to='/about' activeStyle={{ backgroundColor: "#b99a02" }}>About</NavLink>
            <Search />
            <NavLink to ='/myGames'>My games</NavLink>
            </li>
            </ul>
        </nav>
    )
}