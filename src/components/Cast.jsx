import React, { useEffect, useState } from 'react'
import instance from '../utils/instance';
import { Link } from 'react-router-dom';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import 'swiper/styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';


function Cast({ id }) {
    const [movieCast, setMovieCast] = useState()
    useEffect(() => {
        const URL = ` https://api.themoviedb.org/3/movie/${id}/credits`;
        instance
            .get(URL)
            .then((res) => {
                // console.log(res.data.cast)
                setMovieCast(res.data.cast)
            })
            .catch((error) => console.log(error));
    }, [URL]);
    return (
        <div className='px-5 my-10'>
            <h1 className='text-xl mb-3'>Cast</h1>
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
                {movieCast?.map((actor) => (
                    <div key={actor.id} className='relative'>
                        <SwiperSlide>
                            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                            <Link to={`/actor/${actor.id}`} className='absolute flex flex-col justify-end bottom-0 w-full h-full bg-gradient-to-t from-black hover:bg-none'>
                                <h1 className='text-xl font-semibold'>{actor.name}</h1>
                                <p>Role : {actor.character}</p>
                            </Link>
                        </SwiperSlide>
                    </div>


                ))}
            </Swiper>
        </div>
    )
}

export default Cast
