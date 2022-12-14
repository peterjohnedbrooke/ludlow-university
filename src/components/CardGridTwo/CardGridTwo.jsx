import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './CardGridTwo.module.scss'
import bike from './images/bike.jpg'
import chat from './images/chat.jpg'
import support from './images/support.jpg'
import Media from 'react-media'
import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CardGridTwoCarousel from './CardGridTwoCarousel'



const data = [
    {
        image : chat, 
        title : "Chat to a student",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        image : support, 
        title : "Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        image : bike, 
        title : "Life in Ludlow",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }

]

export default function CardGridTwo() {
    return (
        <ContentWrapper>
            <div className={styles.cardGridTwoContainer}>
                <Media query="(min-width: 480px)" render={() => 
                        (
                        <div className={styles.cardGrid}>
                            {data.map((item, i) => {
                                return (
                                    <CardGridTwoCarousel item={item} key={i}/>
                                )
                            })}
                        </div>
                )} />
                <Media query="(max-width: 480px)" render={() => 
                        (
                        <div className={styles.cardGrid}>
                            <Carousel>
                                {data.map((item, i) => {
                                    return (
                                        <Carousel.Item>
                                            <CardGridTwoCarousel item={item} key={i}/>
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </div>
                )} /> 
            </div>
        </ContentWrapper>
    )
}
