import React from 'react'
import styles from "./NavBar.module.scss"
import searchIcon from '../../assets/icons/SearchIcon.png'


export default function NavBar() {
    return (
        <>
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
