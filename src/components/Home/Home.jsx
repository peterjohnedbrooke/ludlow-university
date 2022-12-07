import React from 'react'
import Hero from '../Hero/Hero'
import CardGrid from '../CardGrid/CardGrid';
import CardGridTwo from '../CardGridTwo/CardGridTwo';
import FeatureBanner from '../FeatureBanner/FeatureBanner';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';

export default function Home() {
    return (
        <>
            <Hero />
            <CardGrid />
            <CardGridTwo />
            <FeatureBanner />
            <UpcomingEvents />
        </>
    )
}
