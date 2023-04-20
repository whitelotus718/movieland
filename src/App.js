import './App.css';
import { useEffect } from 'react';

// a313473b note:click link to activate api key
const API_URL = 'http://www.omdbapi.com?apikey=a313473b'

const App = () => {

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json();
      
      console.log(data.Search)
    }

  useEffect(() => {
    searchMovies('Spiderman');
  },[]);

  return (
    <div className="App">
        <h1> App </h1>
    </div>
  );
}

export default App;
