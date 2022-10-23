import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import MovieCard from './MovieCard'

const Watched = () => {
  const {Watched} = useContext(GlobalContext);

  return (
    <div className='container mt-5'>

      <h3 className='text-primary text-center mb-4'>  Watched Movies  </h3>
      
        {
          Watched.length ?

          <MovieCard Movies={Watched} type='Watched' /> 
          :
          <p className='lead text-danger'> There Aren't Movies Here , Add Some !</p>
          
        }

    </div>
  )
}

export default Watched