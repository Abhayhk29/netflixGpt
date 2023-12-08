import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
      console.log(json)
    }
  
    useEffect(() => {
      nowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;