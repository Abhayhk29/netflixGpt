import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoContainer = ({movieId}) => {
    // const dispatch = useDispatch();
    const trailer = useSelector(store => store?.movie?.trailerVideo)

    // const getMoviesVideo = async () => {
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
    //     const json = await data.json();
    //     const filteredData = json.results.filter(video => video.type === "Trailer");
    //     const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0];
    //     dispatch(addTrailerVideo(trailer))
    //     console.log(trailer)
    // }

    // useEffect(() => {
    //     getMoviesVideo(movieId);
    // },[])
    useMovieTrailer(movieId);

  return (
    <div>
        <iframe 
            className='w-screen aspect-video'
            src={'https://www.youtube.com/embed/Po3jStA673E?si='+trailer?.key + '?&autoplay=1&mute=1' } 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
    </div>
  )
}

export default VideoContainer