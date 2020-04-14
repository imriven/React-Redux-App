import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { getMovies } from "./actions"
import Movie from "./components/movie"

function App() {
  const movies = useSelector(state => state.movies)
  const isFetching = useSelector(state => state.isFetching)
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [getMovies])
  return (
    <div>
      {isFetching && <p>Fetching Movies...</p>}
     {movies && movies.map(movie => <Movie movie={movie}/>)}
  {error && <p>{error}</p>}
    </div>
  );
}

export default App;
