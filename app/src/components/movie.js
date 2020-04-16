import React from 'react';
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
margin: 5%;
padding: 3%;
width: 17%;
color:white;
background: linear-gradient(65deg, rgba(185,157,231,0.8) 0%, rgba(101,171,78,0.8) 47%, rgba(185,157,231,0.8) 95%);
border-radius: 25px;
border: 2px solid purple;
`

const AwesomeHeader = Styled.h3`
color: white;
margin: 0 5%;
`



function Movie(props) {
  return (
    <ContainerDiv>
        <AwesomeHeader>Title: {props.movie.title}</AwesomeHeader>
        <p>Director: {props.movie.director}</p>
  <p>Description: {props.movie.description}</p>
    </ContainerDiv>
  );
}

export default Movie;
