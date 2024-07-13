import React, { useEffect, useState } from 'react'
import instance from '../utils/instance';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



function Latest() {
    const [latestMovies, setLatestMovies] = useState()
    useEffect(() => {
        const URL = "https://api.themoviedb.org/3/movie/now_playing";
        instance
            .get(URL)
            .then((res) => setLatestMovies(res.data.results))
            .catch((error) => console.log(error.message));
    }, []);
    return (
        <div>
            <div className='hidden md:grid grid-cols-5 gap-5 px-5'>
                {latestMovies?.map((eachMovie) => (
                    <Link to={`${eachMovie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`} alt="" />
                        <div>
                            <h1>{eachMovie.title}</h1>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='md:hidden px-5'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    className="mySwiper"
                >
                    {latestMovies?.map((eachMovie) => (
                        <SwiperSlide>
                            <Link to={`${eachMovie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`} alt="" />
                                <div>
                                    <h1>{eachMovie.title}</h1>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Latest
