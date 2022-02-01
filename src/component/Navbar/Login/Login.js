import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

import { useState } from 'react';
function Login(props) {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState({
        email: null,
        password: null,
    });
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const history = useHistory();

    const logincontrol = (e) => {
        console.log(e.target.name, e.target.value);

        if (e.target.name === "email") {
            setLoginData({
                ...loginData,
                email: e.target.value,
            });
            setError({
                ...error,
                email: e.target.value.length === 0 ? "Email is required" : !e.target.value.match(/^\b[A-Z][A-Z 0-9._%-]+@[A-Z0-9]+\.[A-Z]{2,4}\b$/i) ? "Email not valid" : null,
            });
        } else {
            setLoginData({
                ...loginData,
                password: e.target.value,
            });
            setError({
                ...error,
                password: e.target.value.length === 0 ? "password is required" : e.target.value.length < 8 ? "Minimum length is 8 characters" : null,
            });
        }
    }
    const submited = (e) => {
        e.preventDefault();
        if (!error.email && !error.password) {
            history.push('/');
        }
    }

    return (
        <>
            <form className="container col-6 border border-4 rounded-3 d-grid gap-1" style={{ marginTop: "25vh" }} onSubmit={e => submited(e)}>
                <h1 className="text-center">Login Form</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-2 fw-bold">Email Address</label>
                    <input type="email" className={`form-control ${error.email ? "border-danger" : null}`} id="email" aria-describedby="emailHelp" value={loginData.email} onChange={(e) => logincontrol(e)} name="email" />
                </div>
                <div id="emailHelp" className="form-text text-light fs-5"> {error.email}</div>
                <div className="mb-3 pass">
                    <label htmlFor="password" className="form-label fs-2 fw-bold">Password</label>
                    <input type={passwordShown ? "text" : "password"} className={`form-control ${error.password ? "border-danger" : null}`} id="password" value={loginData.password} onChange={(e) => logincontrol(e)} name="password" />
                    <i onClick={togglePassword} className="eye-icon"><FontAwesomeIcon icon={faEye} /></i>

                </div>
                <div id="passwordHelp" className="form-text text-light fs-5"> {error.password}</div>

                <button type="submit" disabled={error.email || error.password} className="btn btn-info col-10 offset-1 btn-gradient text-dark btn-opacity-50">Submit</button>
                <br></br>

            </form>
            <div style={{ height: "30vh" }}></div>

        </>
    );
}
export default Login;