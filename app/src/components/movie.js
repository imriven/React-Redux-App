import React from 'react';
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
margin: 5%;
padding: 3%;
width: 25%;
color:white;
background: linear-gradient(90deg, rgba(185,157,231,0.6222864145658263) 0%, rgba(101,171,78,0.6923144257703081) 47%, rgba(185,157,231,0.6222864145658263) 95%);
border-radius: 25px;
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
