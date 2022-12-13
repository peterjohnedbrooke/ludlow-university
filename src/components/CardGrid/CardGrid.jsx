import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './CardGrid.module.scss'
import accomodation from './images/accomodation.jpg'
import clubs from './images/clubs.jpg'
import arrow from '../../assets/icons/arrowRight.png'

export default function CardGrid() {
    return (
        <ContentWrapper>
            <div className={styles.cardGridContainer}>
                <div className={styles.grid}>
                    <div className={styles.gridAreaOne}>
                        <img src={clubs} alt="" />
                        <div>
                            <span>
                                <h5>Activities and Clubs</h5>
                                {/* <img src={arrow} alt="" /> */}
                            </span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                    <div className={styles.gridAreaTwo}>
                        <img src={accomodation} alt="" />
                        <span>
                            <h5>Accommodation</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </span>
                    </div>
                </div>
            </div>
        </ContentWrapper>

    )
}
