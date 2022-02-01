import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState , useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {getMovies} from "../stores/actions";
import { LanguageContext } from "../component/languageContext";
 
function Home() {
    const [movies, setMovies] = useState([]);
    const { contextLanguage,setContextLanguage } = useContext(LanguageContext);

    const favoriteId = useSelector((state) => state.movie.favoriteId);
    const dispatch = useDispatch();

    let isFav = (id) => {
        return favoriteId.find((element) => element === id);
    };

    let toggle = (id) => {
        isFav(id)
        ? dispatch({ type: "REMOVE", payload: id })
        : dispatch({ type: "ADD", payload: id });
    };

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=90aecacd2dcaf70af9d7fcc8c1ba02fe')
            .then((res) => setMovies(res.data.results)).catch((err) => console.log(err));

    }, [])
    return (
        <>
            <div className='row'>
                <h1 className='col-5'>Movies</h1>
                <h2 className='col-4'>Context language : {contextLanguage}</h2>
                <button className="btn btn-info btn-gradient text-dark btn-opacity-50 col-2  " onClick={() => setContextLanguage("ar")} >
                    Context language
                </button>
            </div>
            
            <div className="row">
                {movies.map(movie => {
                    return (
                        <div className="card col-3 mt-2 p-2 text-white bg-dark mb-3" style={{ width: "20rem" }} key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">Rate : {movie.vote_average}</p>
                                <Link key={movie.id} to={`/details/${movie.id}`} className="btn btn-info btn-gradient text-dark btn-opacity-50 col-5 ">Details</Link>
                                <Link className="btn btn-info btn-gradient text-dark btn-opacity-50 col-6 offset-1 " onClick={() => toggle(movie.id)}>Add Favorites</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Home;