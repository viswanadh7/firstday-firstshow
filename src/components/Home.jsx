import React from 'react'
import HeroSection from './HeroSection'
import TopRated from './TopRated'
import Latest from './Latest'
function Home() {
    return (
        <div className='scrollbar-track-transparent scrollbar-thumb-purple-600 scrollbar-thin'>
            <HeroSection />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-3xl text-purple-600 border-b border-gray-600 px-10'>Latest <span className='text-white'>movies</span></h1>
            </div>
            <Latest />
            <hr className='border-gray-600 mt-5' />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-3xl text-purple-600 border-b border-gray-600 px-10'>Top rated <span className='text-white'>movies</span></h1>
            </div>
            <TopRated />
        </div>
    )
}

export default Home
