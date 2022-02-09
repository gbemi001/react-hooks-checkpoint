import MovieCard from './Components/MovieCard';
import './App.css';
import { Filter } from './Components/Filter';
import style from './style.css'
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Hello.. Welcome!</h1>
      <div className='movieAdd'>
      <MovieCard/>
      <Filter/>
      </div>
      <hr/>
      <div className='movieList'>
        <h2>Browse Trending Movies</h2>
      <MovieList/>
      </div>
    </div>
  );
}

export default App;
