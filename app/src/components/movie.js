import React from 'react';


function Movie(props) {
  return (
    <div >
        <p>Title: {props.movie.title}</p>
        <p>Director: {props.movie.director}</p>
  <p>Description: {props.movie.description}</p>
    </div>
  );
}

export default Movie;
