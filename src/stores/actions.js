
import axios from "axios";
export const getMovies = () => async (dispatch) => {
  return axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=8f8651655f78c47056460d8762481908"
    )
    .then((res) => {
      dispatch({
        type: "GET_MOVIES",
        payload: res.data.results,
      });
    })

    .catch((err) => console.log(err));
};

// dispatch({
//   type: "ADD",
//   payload: id,
// })
