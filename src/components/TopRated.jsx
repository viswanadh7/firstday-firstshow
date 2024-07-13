import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';




function TopRated() {
    const [topRatedMovies, setTopRatedMovies] = useState()
    useEffect(() => {
        const URL = "https://api.themoviedb.org/3/movie/top_rated";
        instance
            .get(URL)
            .then((res) => {
                console.log(res.data);
                setTopRatedMovies(res.data.results);
            })
            .catch((error) => console.log(error.message));
    }, []);
    return (
        <div>
            <div className='md:grid grid-cols-5 gap-5 px-5 hidden'>
                {topRatedMovies?.map((eachMovie) => (
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
                    {topRatedMovies?.map((eachMovie) => (
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

export default TopRated
