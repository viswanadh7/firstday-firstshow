import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function NavGallery() {

    return (
        <React.Fragment>
            <nav className='flex justify-center items-center bg-gray-800 h-14 mb-5 px-3 md:px-10'>
                <div className='flex items-center gap-10 md:gap-20'>
                    <NavLink className='text-xl h-full' to='backdrops'>Backdrops</NavLink>
                    <NavLink className='text-xl h-full' to='posters'>Posters</NavLink>
                    <NavLink className='text-xl h-full' to='logos'>Logo</NavLink>
                </div>
            </nav>
            <Outlet />
        </React.Fragment>
    )
}

export default NavGallery
