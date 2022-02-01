import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MoviesDetails() {
    const params = useParams();
    const [details, setDetails] = useState([]);
    console.log(params.id)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=90aecacd2dcaf70af9d7fcc8c1ba02fe`)
            .then((res) => setDetails(res.data)).catch((err) => console.log(err));
    }, [])

    return (
        <div className="row">
            <div className="col-6">
                <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className="card-img-top" style={{ width: "39rem", height: "90vh" }} alt="..." />
            </div>
            <div className="col-6">
                <h1 className="mb-4">Details</h1>
                <hr></hr>
                <h2 className="fs-1">{details.title}</h2>
                <h4>{details.tagline}</h4>
                <hr></hr>
                <h3>Rate : <span className="fs-3">{details.vote_average}</span></h3>
                <h3>Original Language : <span className="fs-4">{details.original_language}</span></h3>
                <hr></hr>
                <h3>Overview : <span className="fs-5">{details.overview}</span></h3>

            </div>

        </div>

    );
}