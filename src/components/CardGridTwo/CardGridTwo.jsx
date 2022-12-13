import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './CardGridTwo.module.scss'
import bike from './images/bike.jpg'
import chat from './images/chat.jpg'
import support from './images/support.jpg'

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
                <div className={styles.cardGrid}>
                    {data.map((item, i) => {
                        return (
                            <div key={i}>
                                <img src={item.image} />
                                <span>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </ContentWrapper>
    )
}
