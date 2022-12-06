import React from 'react'
import Hamburger from 'hamburger-react'
import styles from "./MobileNav.module.scss"
import { useState, useEffect } from 'react';
import fb from "../../assets/icons/facebook.png"
import twitter from "../../assets/icons/twitter.png"
import linkedIn from "../../assets/icons/linkedin.png"
import google from "../../assets/icons/google.png"
import Logo from '../Logo/Logo';


export default function MobileNav() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        setOpen(!isOpen)
    }

    const handleExit = (e) => {
        setClick(!click)
        setOpen(false);
        // setChangePage(true);
    }

    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <div className={click ? styles.logoMove : styles.logoStatic}><Logo /></div>
            <div className={styles.navContainer}>
                <div className={!!click ? `${styles.burgerIconCross} ` : `${styles.burgerIcon} `} onClick={handleClick}>
                    <Hamburger size={25} className={styles.burgerInner} toggled={isOpen} rounded toggle={setOpen} />
                </div>
            </div>
            <div className={click ? `${styles.navMenuActive} ` : `${styles.navMenuHidden} `}>
                {/* <div className={styles.bg}></div> */}
                <ul className={click ? `${styles.listActive} ` : `${styles.listHidden} `}>
                    <li onClick={handleExit}>
                        <h3>Study</h3>
                    </li>
                    <li onClick={handleExit}>
                        <h3>Research</h3>
                    </li>
                    <li onClick={handleExit}>
                        <h3>About Us</h3>
                    </li>
                </ul>
                <ul className={click ? `${styles.iconsList} ` : `${styles.iconsListHidden} `}>
                    <li>
                        <img src={twitter} alt="" />
                    </li>
                    <li>
                        <img src={linkedIn} alt="" />
                    </li>
                    <li>
                        <img src={google} alt="" />
                    </li>
                    <li>
                        <img src={fb} alt="" />
                    </li>
                </ul>
            </div>
        </>
    )
}
