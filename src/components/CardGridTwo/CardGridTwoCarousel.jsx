import React from 'react'
import styles from './CardGridCarousel.module.scss'
import arrow from '../../assets/icons/arrowRight.png'

export default function CardGridTwoCarousel({item, i}) {
  return (
    <div className={styles.carouselItem}>
      <img src={item.image} alt="" />
      <div>
          <span>
            <h5>{item.title}</h5>
            <img src={arrow} alt="" />
          </span>
          <p>{item.text}</p>
      </div>
    </div>
    )
}
