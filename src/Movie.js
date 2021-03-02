import React from 'react';
import './Movie.css'

const Movie = (props) => {
    return(
        <div className="card">
            <div className="movie-card">
                <img className="p-class img-main" src={props.image} alt=""/>
                <h1 className="p-class">{props.title}</h1>
                <p className="p-class"> {props.about} </p>
                <p className="p-class"><u>Actors:</u> {props.actors}</p>
                <p className="p-class"><u>Director:</u> {props.director} </p>
                <p className="p-class"><u>Writer:</u> {props.writer} </p>
                <p className="p-class"><u>Awards:</u> {props.awards} </p>
                <p className="p-class"><u>Genre:</u> {props.genre} </p>
                <p className="p-class"><u>Language:</u> {props.language} </p>
                <p className="p-class"><u>Box office:</u> {props.boxoffice} </p>
                <p className="p-class"><u>imdbrating:</u> {props.imdbrating} </p>
                <p className="p-class"><u>imdbvotes:</u> {props.imdbvotes} </p>
                <p className="p-class"><u>release year:</u> {props.release} </p>
            </div>
        </div>
    );
}
export default Movie;