import React, { useEffect, useState } from 'react'
import instance from '../utils/instance';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
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
        <div className="">
            <div className='px-5'>
                <Swiper
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    slidesPerView={2}
                    spaceBetween={20}
                    className="mySwiper"
                >
                    {latestMovies?.map((eachMovie) => (
                        <SwiperSlide key={eachMovie.id}>
                            <Link to={`/${eachMovie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`} alt="" />
                                <div>
                                    <h1 className='text-xl'>{eachMovie.title}</h1>
                                    <p>Rating : {(eachMovie.vote_average)?.toString().slice(0, 3)} <i className="fa-solid fa-star text-yellow-400"></i></p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Latest
