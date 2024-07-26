import React, { useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import NavGallery from './NavGallery'
import { useParams } from 'react-router-dom'
import instance from '../utils/instance'
function LogoImages() {
    const params = useParams()
    const [num, setNum] = useState(3)
    const queryClient = useQueryClient()
    const IMAGE_URL = `https://api.themoviedb.org/3/movie/${params.id}/images`
    const { data, isLoading } = useQuery({ queryKey: ['fetchLogos', params.id], queryFn: () => { return instance.get(IMAGE_URL) }, staleTime: 300000, onSuccess: () => queryClient.invalidateQueries(['fetchLogos']) })

    if (isLoading) {
        return <h1 className='text-center text-xl'>Loading...</h1>
    } else {
        return (
            <React.Fragment>
                <div className='flex justify-between px-10'>
                    <div>
                        <button onClick={() => navigate(`/${params.id}`)}> &lt;- Back</button>
                    </div>
                    <div>
                        <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => { queryClient.invalidateQueries(['fetchLogos']); setNum(num > 1 ? num - 1 : 1) }}>-</button>
                        {num}
                        <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => { queryClient.invalidateQueries(['fetchLogos']); setNum(num < 5 ? num + 1 : 5) }}>+</button>
                    </div>
                </div>
                <div className={`grid grid-cols-${num} gap-5 px-5`}>
                    {data?.data.logos.map(item => (
                        <img key={item.file_path} className='border-2' src={`https://image.tmdb.org/t/p/original${item.file_path}`} alt="" />
                    ))}
                </div>
            </React.Fragment>
        )
    }

}

export default LogoImages
