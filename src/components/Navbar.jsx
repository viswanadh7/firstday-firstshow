import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '../utils/instance'

function Navbar() {
    const [movieName, setMovieName] = useState()
    const [moviesList, setMoviesList] = useState()
    // useEffect(() => {
    //     const URL = `https://api.themoviedb.org/3/search/movie/${movieName}`
    //     instance.get(URL).then(res => { console.log(res.data); setMoviesList(res.data) }).catch(error => console.log(error.message))
    // })
    return (
        <nav className='flex justify-between items-center h-14 shadow-lg px-5'>
            <Link to='/'>FDFS</Link>
            <div className='relative border w-1/3 block'>
                <input onChange={(e) => setMovieName(e.target.value)} value={movieName} className='w-full text-black' type="text" />
                <button className='absolute right-5 text-black'>Search</button>
            </div>
            <div>Button</div>
        </nav>
    )
}

export default Navbar
