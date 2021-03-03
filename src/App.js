import React, {useState,useEffect} from 'react';
import Movie from './Movie';
import Errormsg from './Errormsg';
import './App.css';

function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getMovie();
  },[query]);
  
  const getMovie =async () =>{
    const myUrl = `https://www.omdbapi.com/?apikey=2731c05&t=${query}`;
    const response = await fetch(myUrl);
    const data = await response.json();
    setMovie(data);
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={(e) => {
      e.preventDefault();
      setQuery(search);
    }}>
      <h1>Movie Database  </h1>
      <div className="search-bar">
      <input type="search" placeholder="Enter movie name..." value={search} onChange={(e) => {setSearch(e.target.value)}}/>
      <button type="submit">search</button>
      </div>
      </form>
      {
        query ? (<Movie title={movie.Title} actors={movie.Actors} boxoffice={movie.BoxOffice} genre ={movie.Genre}
          imdbrating={movie.imdbRating} imdbvotes={movie.imdbVotes} release={movie.Released} awards={movie.Awards}
          about={movie.Plot} language={movie.Language} writer={movie.Writer} director={movie.Director} image={movie.Poster}/>) 
          : (
            <Errormsg />
          )
      } 
    </div>
  );
}

export default App;
