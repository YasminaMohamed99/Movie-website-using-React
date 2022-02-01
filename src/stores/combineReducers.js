import { combineReducers } from "redux";
import languageReducer from "../component/language";

import movieReducer from "./reducer";

export default combineReducers({

  movie: movieReducer,
  language: languageReducer,

});
