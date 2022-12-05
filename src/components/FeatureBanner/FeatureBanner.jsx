import React from 'react'
import styles from './FeatureBanner.module.scss'

export default function FeatureBanner() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.featureBannerContents}>
                    <span>
                        <hr className={styles.styledLine} />
                        <h3>Come along to one of our Open Days and find out everything you need to know about the campus, courses, and facilities</h3>
                    </span>
                    <button><h5>Book an Open Day</h5></button>
                </div>
            </div>
        </>
    )
}
