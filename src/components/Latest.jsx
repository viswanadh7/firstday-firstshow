import React, { useEffect, useState } from 'react'
import instance from '../utils/instance';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

import Carousel from 'react-grid-carousel'

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
            <div className='px-5 md:hidden'>
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
                    {latestMovies?.map((eachMovie) => (
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
            <div className='hidden md:block'>
                <Carousel
                    cols={5}
                    rows={2}
                    gap={20}
                    responsiveLayout={[
                        {
                            breakpoint: 1200,
                            cols: 5,
                            rows: 2,
                        },
                        {
                            breakpoint: 990,
                            cols: 4,
                            rows: 2,
                        }
                    ]}
                // mobileBreakpoint={670}
                >
                    {latestMovies?.map((eachMovie) => (
                        <Carousel.Item>
                            <Link to={`${eachMovie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${eachMovie.poster_path}`}
                                    className="h-[300px] w-full"
                                    alt=""
                                />
                                <div>
                                    <h1 className="text-xl">{eachMovie.title}</h1>
                                    <p>Rating :{(eachMovie.vote_average)?.toString().slice(0, 3)}</p>
                                </div>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default Latest
