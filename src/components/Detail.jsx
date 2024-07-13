import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'
import { useParams } from 'react-router-dom'
import Similar from './Similar'
import Cast from './Cast'

function Detail() {
    const [movieDetails, setMovieDetails] = useState()
    const params = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${params.id}`;

    useEffect(() => {
        instance
            .get(URL)
            .then((res) => {
                // console.log(res.data);
                setMovieDetails(res.data);
            })
            .catch((error) => console.log(error.message));
    }, [URL]);
    return (
        <div>
            <div className='relative text-white'>
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`} className='bg-cover brightness-50 hidden md:block' alt="" />
                <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`} className='h-screen bg-cover brightness-50 md:hidden' alt="" />
                <div className='md:grid grid-cols-5 absolute top-0 md:p-20 bg-gradient-to-t from-black to-transparent w-full h-full'>
                    <div className='col-span-2 p-5 md:w-fit'>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`} className='md:hidden bg-cover h-[300px] md:h-[550px]' alt="" />
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`} className='hidden md:block bg-cover h-[300px] md:h-[550px]' alt="" />
                    </div>
                    <div className='col-span-3 h-full px-5'>
                        <h1 className='text-2xl font-semibold md:text-5xl'>{movieDetails?.title}</h1>
                        <p>{movieDetails?.tagline}</p>
                        <div className="flex flex-col md:flex-row gap-3 my-5">
                            <div className="flex gap-3">
                                <p>{movieDetails?.release_date}</p>
                                <p>{movieDetails?.runtime} min</p>
                            </div>
                            <span className='text-gray-500 hidden md:block'>|</span>
                            <ul className='flex gap-5'>
                                {movieDetails?.genres.map((item, index) => (<li key={index}>{item.name}</li>))}
                            </ul>
                        </div>
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kdr5oedn7q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        <div className='w-full py-1 mb-5 text-lg border flex justify-center'>
                            <a className='' href={`https://www.youtube.com/embed/Kdr5oedn7q8`}>Watch trailer</a>
                        </div>
                        <p className='text-lg'>Overview : </p>
                        <p>{movieDetails?.overview}</p>
                    </div>
                </div>
            </div>
            <Cast id={params.id} />
            <Similar id={params.id} />
        </div>
    )
}

export default Detail
