import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './CardGridTwo.module.scss'
import bike from './images/bike.jpg'
import chat from './images/chat.jpg'
import support from './images/support.jpg'

export default function CardGridTwo() {
    return (
        <ContentWrapper>
            <div className={styles.cardGridTwoContents}>
                <div className={styles.gridTwo}>
                    <div className={styles.gridAreaThree}>
                        <img src={chat} alt="" />
                        <span>
                            <h5>Chat to a student</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </span>
                    </div>
                    <div className={styles.gridAreaFour}>
                        <img src={support} alt="" />
                        <span>
                            <h5>Support</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </span>
                    </div>
                    <div className={styles.gridAreaFive}>
                        <img src={bike} alt="" />
                        <span>
                            <h5>Life in Ludlow</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </span>
                    </div>
                </div>
            </div>

        </ContentWrapper>

    )
}
