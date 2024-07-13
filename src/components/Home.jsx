import React from 'react'
import HeroSection from './HeroSection'
import TopRated from './TopRated'
import Latest from './Latest'
function Home() {
    return (
        <div>
            <HeroSection />
            <h1 className='px-5 mt-10 mb-5 text-xl'>Latest movies</h1>
            <Latest />
            <h1 className='px-5 mt-10 mb-5 text-xl'>Top rated movies you might like</h1>
            <TopRated />
        </div>
    )
}

export default Home
