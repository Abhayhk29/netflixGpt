import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMoviesVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
        const json = await data.json();
        console.log(json)

        const filteredData = json.results.filter(video => video.type === "Trailer");
        const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        console.log(movieId)
        getMoviesVideo()
    },[])
}

export default useMovieTrailer;