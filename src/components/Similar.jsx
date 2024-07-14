import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



function Similar({ id }) {
    const [similarMovies, setSimilarMovies] = useState()
    const URL = `https://api.themoviedb.org/3/movie/${id}/similar`;
    useEffect(() => {
        instance
            .get(URL)
            .then((res) => {
                // console.log(res.data);
                setSimilarMovies(res.data.results);
            })
            .catch((error) => console.log(error.message));
    }, [URL]);
    return (
        <div className='px-5 mb-10'>
            <h1 className='text-xl mt-5 mb-2'>Similar movies</h1>
            <Swiper
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}
                slidesPerView={2}
                spaceBetween={20}
                className="mySwiper"
            >
                {similarMovies?.map((eachMovie) => (
                    <SwiperSlide key={eachMovie.id}>
                        <Link to={`/${eachMovie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`} alt="" />
                            <div>
                                <h1 className='text-xl'>{eachMovie.title}</h1>
                                <p>Rating :{(eachMovie.vote_average)?.toString().slice(0, 3)}</p>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Similar
