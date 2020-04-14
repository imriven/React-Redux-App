import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { getMovies } from "./actions"
import Movie from "./components/movie"
import  Video  from "./media/background1.mp4"
import Styled from "styled-components"

/** Styles **/

const BackgroundContainer = Styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 5%;
border-radius: 0 5%;
padding: 1%;
width: 60%;
color:white;
text-align: center;
`

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0 5% 0;
width: 100%;

`

const VideoBackground = Styled.div`
display: flex;
justify-content: center;
`

const AwesomeHeader = Styled.h1`
display:flex;
text-align:center;
color: white;
text-shadow: 5px 5px 8px mediumPurple;
text-align: center;
`

const AwesomeTitleHeader = Styled.h2`
display:flex;
text-align:center;
color: white;
text-shadow: 5px 5px 8px lime;
text-align: center;
`

/***/
function App() {
  const movies = useSelector(state => state.movies)
  const isFetching = useSelector(state => state.isFetching)
  const error = useSelector(state => state.error)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [getMovies])
  return (
    <VideoBackground>
      <video style={{ zIndex: -1, position: "fixed", minWidth: "100%", minHeight: "100vh" }} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          </video>
          <BackgroundContainer>
            <AwesomeHeader>Studio Ghibli Movies</AwesomeHeader>
            <ContainerDiv>
      {isFetching && <p>Fetching Movies...</p>}
     {movies && movies.map(movie => <Movie movie={movie}/>)}
  {error && <p>{error}</p>}
  </ContainerDiv>
  </BackgroundContainer>
    </VideoBackground>
  );
}

export default App;
