import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './nav.module.css'

const activeStyle = {
    color:'palevioletred',
    textDecoration:'none'
}

const Nav = () => (
    <ul className={styles.nav_list}>
        <li>
            <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/movies"  activeStyle={activeStyle}>Movies</NavLink>
        </li>
    </ul>
);

export default Nav;