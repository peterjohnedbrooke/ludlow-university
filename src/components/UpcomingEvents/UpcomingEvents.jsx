import React from 'react'
import styles from './UpcomingEvents.module.scss'
import festival from './images/festival.jpg'
import game from './images/game.jpg'
import study from './images/study.jpg'
import EventCard from '../EventCard/EventCard'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
// import { Carousel } from 'react-responsive-carousel';
import Media from 'react-media';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from 'react-bootstrap/Carousel';


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
            <div className={styles.upcomingEventsContainer}>
                <div className={styles.titleContainer}>
                    <h3>Upcoming Events</h3>
                    <button><h5>View all events</h5></button>
                </div>
                    <Media query="(min-width: 480px)" render={() => 
                    (
                        <div className={styles.eventsCardsGrid}>
                            {events.map((event, i) => {
                                return (
                                    <EventCard event={event} key={i} />
                                )
                            })}
                        </div>
                    )} />

                    <Media query="(max-width: 480px)" render={() => 
                        (
                            <div className={styles.eventsCardsGrid}>
                                <Carousel className="d-block w-100">
                                    {events.map((event, i) => {
                                        return (
                                            <Carousel.Item key={i} className="w-100">
                                                <EventCard event={event} key={i} />
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        )}
                    />
            </div>
        </ContentWrapper>
    )
}
