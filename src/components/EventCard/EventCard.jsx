import React from 'react'
import styles from './EventCard.module.scss'

export default function EventCard({ event }) {
    return (
        <div className={styles.eventCard} style={{ backgroundImage: `url(${event.image})` }}>
            <div className={styles.eventcardContent}>
                <div className={styles.eventDate}>
                    {event.date.map((date, i) => {
                        return (
                            <div key={i}>
                                <h1>{date.day}</h1>
                                <h3>{date.month}</h3>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.eventTitle}>
                    <h3>{event.title}</h3>
                </div>
            </div>
        </div>
    )
}
