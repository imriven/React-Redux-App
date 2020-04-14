import axios from "axios"


export const FETCH_MOVIES_START = 'FETCH_MOVIES_START';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';


export const getMovies = () => dispatch => {
    dispatch({ type: FETCH_MOVIES_START });
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then(res =>
        dispatch({ type: FETCH_MOVIES_SUCCESS, payload: res.data })
      )
      .catch(err => dispatch({ type: FETCH_MOVIES_ERROR, payload: err.response.statusText }));
  };