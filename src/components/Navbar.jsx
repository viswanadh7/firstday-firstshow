import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-between items-center h-14 shadow-lg px-5'>
            <Link to='/'>FDFS</Link>
            <div className='relative border hidden md:block'>
                <input type="text" />
                <button className='absolute right-5'>Search</button>
            </div>
            <div>Button</div>
        </nav>
    )
}

export default Navbar
