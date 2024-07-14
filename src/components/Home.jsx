import React from 'react'
import HeroSection from './HeroSection'
import TopRated from './TopRated'
import Latest from './Latest'
function Home() {
    return (
        <div>
            <HeroSection />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-xl'><span className='text-purple-700 text-3xl'>//</span> Latest movies <span className='text-purple-700 text-3xl'>//</span></h1>
            </div>
            <Latest />
            <hr className='border-gray-600 mt-5' />
            <div className="flex justify-center">
                <h1 className='mt-10 mb-5 text-xl'><span className='text-purple-700 text-3xl'>//</span> Top rated movies you might like <span className='text-purple-700 text-3xl'>//</span></h1>
            </div>
            <TopRated />
        </div>
    )
}

export default Home
