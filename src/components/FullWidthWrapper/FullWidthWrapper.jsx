import React from 'react'
import styles from './FullWidthWrapper.module.scss'

export default function FullWidthtWrapper({ children }) {
    return (
        <div className={styles.wrapper}>{children}</div>
    )
}
