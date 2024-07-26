import React from 'react'
import instance from '../utils/instance'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { useQuery } from '@tanstack/react-query';




function TopRated() {
    const URL = "https://api.themoviedb.org/3/movie/top_rated";


    const { data } = useQuery({ queryKey: ['getTopRated'], queryFn: () => { return instance.get(URL) } })
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
                    {data?.data.results.map((eachMovie) => (
                        <SwiperSlide key={eachMovie.id}>
                            <Link to={`/${eachMovie.id}`}>
                                <div className='overflow-hidden'>
                                    <img src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`} className='hover:scale-110 duration-300' alt="" />
                                </div>
                                <div>
                                    <h1 className='text-xl'>{eachMovie.title}</h1>
                                    <p>Rating :{(eachMovie.vote_average)?.toString().slice(0, 3)} <i className="fa-solid fa-star text-yellow-400"></i></p>
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
