import React from 'react'
import styles from './Logo.module.scss'
import darkLogo from '../../assets/icons/dark.png'

export default function Logo() {
    return (
        <>
            <img className={styles.logo} src={darkLogo} />
        </>
    )
}
