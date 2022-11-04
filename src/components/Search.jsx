import React, {useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Search = () => {

  const [SearchItem, setSearchItem] = useState('');
  const [Movies, setMovies] = useState([]);


  const handleChange = async (e) =>{

    setSearchItem(e.target.value)

    // fetch(`https://api.themoviedb.org/3/search/movie?api_key=ee33a82bf827459de426108c06723f41&language=en-US&query=${SearchItem}&page=1&include_adult=false`)
    // .then(res=>res.json())
    // .then(data => console.log(data))
    // .catch(err=>console.log(err))

  await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ee33a82bf827459de426108c06723f41&language=en-US&query=${SearchItem}&page=1&include_adult=false`)
    .then(res=>{setMovies(res.data.results)})
    
  }


  return (
    <div className='parent pt-5'>

        <input 
        type='text'
        onChange={handleChange}
        className='form-control w-50 m-auto mb-3'
        placeholder='Search For Your Movie'
        />

        <div className='container mt-4'>
              <div className="row flex-column">

                  { 
                  Movies.length ?

                  <MovieCard  Movies={Movies} type='Search'/> 
                  : 
                  <div className="d-flex align-items-center ">
                    <strong>Loading...</strong>
                    <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                  </div> 
                  
                }

              </div>
        </div>

  </div>
  )
}

export default Search