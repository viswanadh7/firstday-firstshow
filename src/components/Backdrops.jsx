import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../utils/instance'
import { useQuery } from '@tanstack/react-query'
import NavGallery from './NavGallery'

function Backdrops() {
    const params = useParams()
    const navigate = useNavigate()
    const [num, setNum] = useState(2)
    // const [backdropsImages, setBackdrops] = useState()
    const IMAGE_URL = `https://api.themoviedb.org/3/movie/${params.id}/images`
    // useEffect(() => {
    //     instance.get(IMAGE_URL).then(res => { images.setImages(res.data); setBackdrops(res.data.backdrops) }).catch(error => error.message)
    // }, [IMAGE_URL])
    const { data, isLoading } = useQuery({ queryKey: ['fetchBackdrops'], queryFn: () => { return instance.get(IMAGE_URL) } })
    return (
        <React.Fragment>
            {/* <NavGallery /> */}
            {isLoading ? <h1 className='text-center text-xl'>Loading...</h1> : null}
            <div className='flex justify-between px-10'>
                <div>
                    <button onClick={() => navigate(`/${params.id}`)}> &lt;- Back</button>
                </div>
                <div>
                    <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => setNum(num > 1 ? num - 1 : 1)}>-</button>
                    {num}
                    <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => setNum(num < 5 ? num + 1 : 5)}>+</button>
                </div>
            </div>
            <div className={`grid grid-cols-${num} gap-5 px-5`}>
                {data?.data.backdrops.map(item => (
                    <img key={item.file_path} src={`https://image.tmdb.org/t/p/original${item.file_path}`} alt="" />
                ))}
            </div>
        </React.Fragment>
    )
}

export default Backdrops
