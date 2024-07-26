import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../utils/instance'

function Trailer() {
    const params = useParams()
    const [trailerID, setTrailerID] = useState()
    const URL_TRAILER = `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US`;
    useEffect(() => {
        instance
            .get(URL_TRAILER)
            .then((res) => {
                console.log(res.data.results);
                res.data.results.map((item) => {
                    if (item.site == 'YouTube' && item.type == 'Trailer') {
                        setTrailerID(item.key)
                    }
                })
                // setMovieDetails(res.data);
            })
            .catch((error) => console.log(error.message));
    })
    return (
        <iframe className='h-screen w-screen' src={`https://www.youtube.com/embed/${trailerID}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    )
}

export default Trailer
