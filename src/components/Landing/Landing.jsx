import React from 'react'
import Hero from '../Hero/Hero'
import { Outlet, Link } from "react-router-dom";
import CardGrid from '../CardGrid/CardGrid';
import CardGridTwo from '../CardGridTwo/CardGridTwo';
import FeatureBanner from '../FeatureBanner/FeatureBanner';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Footer from '../Footer/Footer';

export default function Landing() {
    return (
        <>
            <Hero />
            <CardGrid />
            <CardGridTwo />
            <FeatureBanner />
            <UpcomingEvents />
            <Footer />
        </>
    )
}
