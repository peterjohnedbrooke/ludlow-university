import React from 'react'
import styles from './Layout.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
    return (
        <div className={styles.layoutWrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
