import React from 'react'
import styles from "./NavBar.module.scss"
import searchIcon from '../../assets/icons/SearchIcon.png'
import Logo from '../Logo/Logo'


export default function NavBar() {
    return (
        <>
            <Logo />
            <ul className={styles.nav}>
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
                    <img src={searchIcon} />
                </li>
            </ul>
        </>
    )
}
