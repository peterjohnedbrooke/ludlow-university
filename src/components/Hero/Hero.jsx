import React from 'react'
import styles from './Hero.module.scss'
import heroImg from './images/Group.png'

export default function Hero() {
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                <div className={styles.heroTextContainer}>
                    <h1>Student Life</h1>
                    <span className={styles.spanOne}><h3>There is so much going on at Ludlow University, both on and off campus. </h3></span>
                    <span className={styles.spanTwo}>
                        <h4>Lisa Smith</h4>
                        <p>Student, BSc (Hons) Computer Games Design </p>
                    </span>
                    <span className={styles.spanThree}><button><h5>View student stories</h5></button></span>
                </div>
                <div className={styles.heroImgContainer}>
                    <img src={heroImg} alt="" />
                </div>
            </div>

        </div>
    )
}
