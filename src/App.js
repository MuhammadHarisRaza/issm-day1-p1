import SearchIcon from './Search.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API_URL } from './constant/api';
import MovieCard from './components/MovieCard';


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")


  const searchMovies = async (title) => {
    
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
    setMovies(data.Search)
  }
  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <img 
          src={SearchIcon}
          alt="search"
          onClick={()=>searchMovies(search)}
        />
      </div>

      {
        movies.length > 0 ?(
          <div className='container'>
            {
              movies.map((movie)=>(
                <MovieCard movie={movie} />
              ))
            }
          </div>
        ):(
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

      
    </div>
  );
}

export default App;
