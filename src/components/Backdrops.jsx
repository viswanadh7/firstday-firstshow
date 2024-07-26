import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import instance from '../utils/instance'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function Backdrops() {
    const params = useParams()
    const navigate = useNavigate()
    const [num, setNum] = useState(2)
    const queryClient = useQueryClient()
    const IMAGE_URL = `https://api.themoviedb.org/3/movie/${params.id}/images`
    const { data, isLoading } = useQuery({ queryKey: ['fetchBackdrops', params.id], queryFn: () => { return instance.get(IMAGE_URL) }, staleTime: 300000, onSuccess: () => queryClient.invalidateQueries(['fetchBackdrops']) })

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
                        <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => { setNum(num > 1 ? num - 1 : 1); queryClient.invalidateQueries(['fetchBackdrops']) }}>-</button>
                        {num}
                        <button className='border w-14 mx-3 mb-5 text-xl pb-1' onClick={() => { setNum(num < 5 ? num + 1 : 5); queryClient.invalidateQueries(['fetchBackdrops']) }}>+</button>
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

}

export default Backdrops
