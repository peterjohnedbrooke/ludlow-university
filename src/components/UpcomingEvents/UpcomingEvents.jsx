import React from 'react'
import styles from './UpcomingEvents.module.scss'
import festival from './images/festival.jpg'
import game from './images/game.jpg'
import study from './images/study.jpg'
import EventCard from '../EventCard/EventCard'
import ContentWrapper from '../ContentWrapper/ContentWrapper'

const events = [{
    date: [{
        day: "01",
        month: "AUG"
    }],
    image: festival,
    title: "Ludlow campus rock festival 2019"
},
{
    date: [{
        day: "14",
        month: "AUG"
    }],
    image: game,
    title: "2019 game design exhibition"
},
{
    date: [{
        day: "21",
        month: "AUG"
    }],
    image: study,
    title: "Study collaboration session"
}]


export default function UpcomingEvents() {
    return (
        <ContentWrapper>
            <div className={styles.upcomingEventsContents}>
                <div className={styles.titleContainer}>
                    <h3>Upcoming Events</h3>
                    <button><h5>View all events</h5></button>
                </div>
                <div className={styles.eventsCardsGrid}>
                    {events.map((event, i) => {
                        return (
                            <EventCard event={event} key={i} />
                        )
                    })}
                </div>
            </div>
        </ContentWrapper>
    )
}
