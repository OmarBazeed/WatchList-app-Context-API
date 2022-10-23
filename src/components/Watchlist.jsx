import React, { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'
import MovieCard from './MovieCard';


const Watchlist = () => {

  const {WatchList} = useContext(GlobalContext);

  return (
    <div className='container mt-5'>
        <h3 className='text-primary text-center mb-4'> Your WatchList  </h3>

        <div className='d-flex align-items-start align-items-xs-center flex-row flex-wrap'>
          {
              WatchList.length ?

                <MovieCard Movies={WatchList} type='WatchList' />
              :
            <p className='lead'> There Is No Data To Show -,- Add Some !</p>

          }
        </div>
    </div>
  )
}

export default Watchlist