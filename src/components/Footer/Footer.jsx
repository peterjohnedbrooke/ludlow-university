import React from 'react'
import styles from './Footer.module.scss'
import logoBg from "./assets/bgLogo.jpg"
import twitter from "./assets/twitter.png"
import fb from "./assets/facebook.png"
import linkedIn from "./assets/linkedin.png"
import google from "./assets/google.png"
import Logo from '../Logo/Logo'
import twitterFeed from "./assets/twitterBlock.png"

export default function Footer() {
    console.log(logoBg)
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footer}>
                <div className={styles.footerLogoContents} style={{ backgroundImage: `url(${logoBg})` }}>
                    <div>
                        <Logo />
                        <ul>
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
                </div>
                <div className={styles.twitterFeed}>
                    <img src={twitterFeed} alt="" />
                </div>
            </div>
        </div>

    )
}
