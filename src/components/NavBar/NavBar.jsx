import React from 'react'
import styles from "./NavBar.module.scss"
import searchIcon from '../../assets/icons/SearchIcon.png'
import Logo from '../Logo/Logo'


export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <Logo />
            <ul className={styles.navList}>
                <li>
                    <h5>Study</h5>
                </li>
                <li>
                    <h5>Research</h5>
                </li>
                <li>
                    <h5>About Us</h5>
                </li>
                <li>
                    <img src={searchIcon} alt=""/>
                </li>
            </ul>
        </div>
    )
}
