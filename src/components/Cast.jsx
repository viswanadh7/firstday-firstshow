import React, { useEffect, useState } from 'react'
import instance from '../utils/instance';


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
                console.log(res.data)
                setMovieCast(res.data.results)
            })
            .catch((error) => console.log(error));
    }, [URL]);
    return (
        <div className='bg-white text-black'>
            <Swiper
                slidesPerView={3}
                grid={{
                    rows: 2,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Cast
