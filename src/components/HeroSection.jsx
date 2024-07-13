import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';



function HeroSection() {
    const [movie, setMovie] = useState()
    // const URL = 'https://api.themoviedb.org/3/movie/454292';
    const URL = 'https://api.themoviedb.org/3/movie/popular';
    useEffect(() => {
        instance
            .get(URL)
            .then((res) => {
                // console.log(res.data.results);
                setMovie(res.data.results);
            })
            .catch((error) => console.log(error.message));
    }, []);
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {movie?.map((eachMovie) => (
                    <SwiperSlide key={eachMovie.id}>
                        <div className='relative'>
                            <img src={`https://image.tmdb.org/t/p/original/${eachMovie?.backdrop_path}`} className='h-1/2 md:h-screen w-screen bg-cover' alt="" />
                            {/* <img src={`https://image.tmdb.org/t/p/original/${eachMovie?.poster_path}`} className='h-2/3 w-screen md:hidden bg-cover' alt="" /> */}
                            <div className='absolute bottom-0 lg:bottom-40 text-white px-5'>
                                <h1 className='lg:text-6xl font-semibold'>{eachMovie?.title}</h1>
                                {/* <ul className='flex gap-5'>
                            {movie?.genres.map((item) => (<li>{item.name}</li>))}
                        </ul> */}
                                {/* <p className='w-1/2'>{eachMovie?.overview}</p> */}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection
