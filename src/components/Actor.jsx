import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../utils/instance'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Actor() {
    const params = useParams()
    const [personDetails, setPersonDetails] = useState()
    const [personMovies, setPersonMovies] = useState()
    const [socialID, setSocialID] = useState()
    const URL = `https://api.themoviedb.org/3/person/${params.id}`
    const PERSON_MOVIES_URL = `https://api.themoviedb.org/3/person/${params.id}/movie_credits`
    const SOCIAL_ID_URL = `https://api.themoviedb.org/3/person/${params.id}/external_ids`
    useEffect(() => {
        instance
            .get(URL)
            .then((res) => {
                // console.log(res.data)
                setPersonDetails(res.data)
            })
            .catch((error) => console.log(error.message));
        instance
            .get(PERSON_MOVIES_URL)
            .then((res) => {
                // console.log(res.data);
                setPersonMovies(res.data.cast);
            })
            .catch((error) => console.log(error.message));
        instance
            .get(SOCIAL_ID_URL)
            .then((res) => {
                // console.log(res.data);
                setSocialID(res.data);
            })
            .catch((error) => console.log(error.message));
    }, [URL]);
    return (
        <div>
            <div className='lg:grid grid-cols-10 items-center gap-10 px-5 md:px-40 h-screen'>
                <div className='col-span-4 h-3/4 md:h-1/2 lg:h-screen py-16'>
                    <img src={`https://image.tmdb.org/t/p/w500/${personDetails?.profile_path}`} className='h-full w-full' alt="" />
                    <div className='flex justify-between px-5 my-3 text-3xl'>
                        <a href={`https://www.instagram.com/${socialID?.instagram_id}/`} target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href={`https://x.com/${socialID?.twitter_id}/`} target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href={`https://www.imdb.com/name/${socialID?.imdb_id}/`} target="_blank"><i class="fa-brands fa-imdb"></i></a>
                    </div>
                </div>
                <div className='col-span-6'>
                    <h1 className='text-5xl font-semibold'>{personDetails?.name}</h1>
                    <p>{personDetails?.biography}</p>
                    <div className='mt-8'>
                        <h1 className='text-xl'>Known for</h1>
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                            slidesPerView={2}
                            spaceBetween={20}
                            className="mySwiper"
                        >
                            {personMovies?.reverse().map((eachMovie) => (
                                <SwiperSlide key={eachMovie.id}>
                                    <Link to={`/${eachMovie.id}`}>
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
            </div>
        </div>
    )
}

export default Actor
