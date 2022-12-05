import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './CardGrid.module.scss'
import accomodation from './images/accomodation.jpg'
import clubs from './images/clubs.jpg'

export default function CardGrid() {
    return (
        <ContentWrapper>
            <div className={styles.cardGridContents}>
                <div className={styles.gridOne}>
                    <div className={styles.gridAreaOne}>
                        <img src={clubs} alt="" />
                        <span>
                            <h5>Activities and Clubs</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </span>
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
