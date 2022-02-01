import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


import { useSelector, useDispatch } from "react-redux";

function Favorites() {
  let favoriteId = useSelector((state) => state.movie.favoriteId);
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);

  let removeFav = (id) => {
    setMovies(movies.filter((element) => element.id != id));
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    let urls = favoriteId.map(
      (id) =>
        `https://api.themoviedb.org/3/movie/${id}?api_key=90aecacd2dcaf70af9d7fcc8c1ba02fe`
    );
    axios
      .all(urls.map((url) => axios.get(url).then((res) => res.data)))
      .then((resArray) => setMovies([...movies, ...resArray]));
  }, []);

  useEffect(() => {}, [favoriteId]);

  return (
    <div>
      <div className="row">
          {movies.map(movie => {
              return (
                  <div className="card col-3 mt-2 p-2 text-white bg-dark mb-3" style={{ width: "20rem" }} key={movie.id}>
                      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">{movie.title}</h5>
                          <p className="card-text">Rate : {movie.vote_average}</p>
                              <p>{movie.overview}</p>
                              <Link className="btn btn-info btn-gradient text-dark btn-opacity-50" onClick={() => removeFav(movie.id)}>Remove Favorites</Link>
                      </div>
                  </div>
              );
          })}
        </div>  
    </div>
  );
}

export default Favorites;
