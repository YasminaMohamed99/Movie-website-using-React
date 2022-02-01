import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Navbar from './component/Navbar/Navbar';
import Login from './component/Navbar/Login/Login';
import Register from './component/Navbar/Register';
import NotFound from './component/NotFound';
import MoviesDetails from './pages/MovieDetails';
import Favorites from "./pages/Favorites";
import { useState } from "react";
import { useSelector } from "react-redux";
import LangComponent from "./component/LangComponent";

import { LanguageContext } from "./component/languageContext";

function App() {
  const lang = useSelector((state) => state.language.lang);
  const [contextLanguage, setContextLanguage] = useState("en");
  
  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "text-right" : "text-left"}
    >
     <LanguageContext.Provider value={{ contextLanguage, setContextLanguage }}>
    <BrowserRouter>
      <Navbar />
      <div className="p-3 mb-2 bg-dark text-white" >
        <div className="container">
          <switch>
            <Route path={"/"} exact component={Home} />
            <Route path={"/login"} exact component={Login} />
            <Route path={"/register"} exact component={Register} />
            <Route path={"/details/:id"} exact component={MoviesDetails} />
            <Route path={"/Favorites"} exact component={Favorites} />
            <Route path={"/functional"} exact component={LangComponent} />
            
          </switch>
        </div>
      </div>

    </BrowserRouter>
    </LanguageContext.Provider>
    </div>

  );
}
export default App;
