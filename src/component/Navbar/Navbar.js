import React from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const language = useSelector((state) => state.language.lang);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info navbar-light bg-gradient text-dark bg-opacity-50 "  >
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">Movies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/Favorites">Favorites</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link" >
                                    {language}
                                </span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <Link className="nav-link active" to="/login"><button className="btn btn-outline-dark" type="submit">Login</button></Link>
                            <Link className="nav-link active" to="/register"><button className="btn btn-outline-dark" type="submit">Register</button></Link>

                        </form>

                    </div>
                </div>
            </nav>
        </>
    );
}
export default Navbar;