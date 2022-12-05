import React from 'react'
import styles from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import { Outlet } from 'react-router-dom';
import FullWidthtWrapper from '../FullWidthWrapper/FullWidthWrapper';
import Media from 'react-media';
import MobileNav from '../MobileNav/MobileNav';

export default function Header() {
    return (
        <>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContainer}>
                    <Media query="(min-width: 720px)" render={() => (<NavBar />)} />
                    <Media query="(max-width: 720px)" render={() => (<MobileNav />)} />
                </div>
            </div>
            <Outlet />
        </>
    )
}
