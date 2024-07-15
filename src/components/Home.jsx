import React from 'react'
import HeroSection from './HeroSection'
import TopRated from './TopRated'
import Latest from './Latest'
function Home() {
    return (
        <div>
            <HeroSection />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-2xl text-purple-600 underline'>Latest movies</h1>
            </div>
            <Latest />
            <hr className='border-gray-600 mt-5' />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-2xl text-purple-600 underline'>Top rated movies you might like</h1>
            </div>
            <TopRated />
        </div>
    )
}

export default Home
