import React from 'react'
import styles from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import { Outlet } from 'react-router-dom';
import FullWidthtWrapper from '../FullWidthWrapper/FullWidthWrapper';

export default function Header() {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContainer}>
                    <Logo />
                    <NavBar />
                </div>
            </div>
            <Outlet />
        </>
    )
}
