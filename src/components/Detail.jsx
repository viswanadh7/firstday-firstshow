import React, { useEffect, useState } from 'react'
import instance from '../utils/instance'
import { Link, useParams } from 'react-router-dom'
import Similar from './Similar'
import Cast from './Cast'
import { useQuery } from '@tanstack/react-query'

function Detail() {
    const { id } = useParams()
    const URL = `https://api.themoviedb.org/3/movie/${id}`;


    const { data, isLoading } = useQuery({ queryKey: ['getMovieDetails', id], queryFn: () => { return instance.get(URL) } })
    if (isLoading) {
        return <h1>Loadind...</h1>
    } else {
        return (
            <div>
                {/* For large screens */}
                <div className='min-h-screen w-screen hidden lg:block' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}')`, backgroundSize: 'cover' }}>
                    <div className='md:grid grid-cols-5 md:p-20 bg-gradient-to-t from-black to-black/30 w-full h-full'>
                        <div className='col-span-2 p-5 md:w-fit'>
                            {/* <img src={`https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}`} className='md:hidden bg-cover h-[300px] md:h-[550px]' alt="" /> */}
                            <img src={`https://image.tmdb.org/t/p/original/${data?.data.poster_path}`} className='h-[550px] rounded-xl shadow-2xl shadow-black' alt="" />
                        </div>
                        <div className='col-span-3 h-full px-5'>
                            <h1 className='text-2xl font-semibold md:text-5xl'>{data?.data.title}</h1>
                            <p>{data?.data.tagline}</p>
                            <div className="flex flex-col md:flex-row gap-3 my-5">
                                <div className="flex gap-3">
                                    <p>{data?.data.release_date}</p>
                                    <p>{data?.data.runtime} min</p>
                                </div>
                                <span className='text-gray-500 hidden md:block'>|</span>
                                <ul className='flex gap-5'>
                                    {data?.data.genres.map((item, index) => (<li key={index}>{item.name}</li>))}
                                </ul>
                            </div>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kdr5oedn7q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            <div className='w-full mb-5 text-lg flex justify-between gap-10 px-10'>
                                <Link to='trailer' className='border w-full text-center'>Watch trailer</Link>
                                <Link className='border w-full text-center' to='gallery/backdrops'>Gallery</Link>
                            </div>
                            <p className='text-lg'>Overview : </p>
                            <p>{data?.data.overview}</p>
                        </div>
                    </div>
                </div>
                {/* For medium screens */}
                <div className='max-h-screen w-screen hidden md:block lg:hidden' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <div className='grid grid-cols-5 items-center p-10 bg-gradient-to-t from-black w-full h-full'>
                        <div className='col-span-2 p-5 md:w-fit'>
                            {/* <img src={`https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}`} className='md:hidden bg-cover h-[300px] md:h-[550px]' alt="" /> */}
                            <img src={`https://image.tmdb.org/t/p/original/${data?.data.poster_path}`} className='h-[350px] rounded-lg shadow-2xl shadow-black' alt="" />
                        </div>
                        <div className='col-span-3 h-full px-5'>
                            <h1 className='font-semibold text-3xl'>{data?.data.title}</h1>
                            <p>{data?.data.tagline}</p>
                            <div className="my-3">
                                <div className="flex gap-3">
                                    <p>{data?.data.release_date}</p>
                                    <p>Runtime: {data?.data.runtime} min</p>
                                </div>
                                <ul className='flex gap-5'>
                                    {data?.data.genres.map((item, index) => (<li key={index}>{item.name}</li>))}
                                </ul>
                            </div>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kdr5oedn7q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            <div className='w-full mb-5 text-lg flex justify-between gap-5'>
                                <Link to='trailer' className='border w-full text-center'>Watch trailer</Link>
                                <Link className='border w-full text-center' to='gallery/backdrops'>Gallery</Link>
                            </div>
                            <p className='text-lg'>Overview : </p>
                            <p>{data?.data.overview}</p>
                        </div>
                    </div>
                </div>
                {/* For small screens */}
                <div className='min-h-screen w-screen md:hidden' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.data.poster_path}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <div className='md:grid grid-cols-5 md:p-20 bg-gradient-to-t from-black w-full h-full'>
                        <div className='col-span-2 p-5 md:w-fit'>
                            <img src={`https://image.tmdb.org/t/p/original/${data?.data.backdrop_path}`} className='rounded-lg shadow-black shadow-2xl' alt="" />
                            {/* <img src={`https://image.tmdb.org/t/p/original/${data?.data.poster_path}`} className='hidden md:block bg-cover h-[300px] md:h-[550px]' alt="" /> */}
                        </div>
                        <div className='col-span-3 h-full px-5'>
                            <h1 className='text-2xl font-semibold md:text-5xl'>{data?.data.title}</h1>
                            <p>{data?.data.tagline}</p>
                            <div className="flex flex-col md:flex-row gap-3 my-5">
                                <div className="flex gap-3">
                                    <p>{data?.data.release_date}</p>
                                    <p>{data?.data.runtime} min</p>
                                </div>
                                <span className='text-gray-500 hidden md:block'>|</span>
                                <ul className='flex gap-5'>
                                    {data?.data.genres.map((item, index) => (<li key={index}>{item.name}</li>))}
                                </ul>
                            </div>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Kdr5oedn7q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                            <div className='w-full mb-5 text-lg flex flex-col gap-5'>
                                <Link to='trailer' className='border w-full text-center'>Watch trailer</Link>
                                <Link className='border w-full text-center' to='gallery/backdrops'>Gallery</Link>
                            </div>
                            <p className='text-lg'>Overview : </p>
                            <p>{data?.data.overview}</p>
                        </div>
                    </div>
                </div>
                <Cast id={id} />
                <hr className='border-gray-700' />
                <Similar id={id} />
            </div>
        )
    }

}

export default Detail
