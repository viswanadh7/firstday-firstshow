import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'
import { Link } from 'react-router-dom';

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
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {movie?.map((eachMovie) => (
                    <SwiperSlide key={eachMovie.id}>
                        <div className='relative'>
                            <img src={`https://image.tmdb.org/t/p/original/${eachMovie?.backdrop_path}`} className='h-1/2 md:max-h-screen lg:h-screen w-screen bg-cover' alt="" />
                            {/* <img src={`https://image.tmdb.org/t/p/original/${eachMovie?.poster_path}`} className='h-2/3 w-screen md:hidden bg-cover' alt="" /> */}
                            <div className='absolute bottom-0 lg:bottom-20 text-white text-shadow px-5'>
                                <Link to={`/${eachMovie.id}`} className='md:text-3xl lg:text-6xl font-semibold [text-shadow:_10px_10px_15px_black]'>{eachMovie?.title}</Link>
                                <p className='mt-3'>Rating : {(eachMovie.vote_average)?.toString().slice(0, 3)} <i className="fa-solid fa-star text-yellow-400"></i></p>
                                <p className=''>Released on : {eachMovie.release_date}</p>
                                <p className='w-2/3 hidden md:block'>{eachMovie?.overview}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection
