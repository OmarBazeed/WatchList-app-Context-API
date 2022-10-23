import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import React ,{useContext} from 'react';
import  {GlobalContext}  from '../context/globalContext';



const MovieCard = ({Movies,type}) => {

    const { WatchList , AddMovieToWatchList , RemoveMovieFromWatchList , AddMovieToWatched , BackMovieToWatchListFromWatched ,RemoveMovieFromWatched } = useContext(GlobalContext);

    const show = () =>{
            document.querySelectorAll('.logo span').forEach((el)=>{
                el.classList.add('shown')
            })   
    }

return (
        <>
        {
            type === 'Search' && 
            Movies.map((ele)=>{

            const disabledBtn = WatchList.find(mov => mov.id === ele.id) ? true : false;

            return(
            <div key={ele.id}>

                <div className='mb-5 d-flex justify-content-start align-items-center flex-wrap'>
                    <div className='logo text-light me-5 my-3'> 
                        <img 
                        src={ele.backdrop_path && `https://image.tmdb.org/t/p/w200${ele.backdrop_path}`}
                        alt='...'
                        className='movie-img'
                        />
                    </div>

                    <div className='info'>
                    <p className='fw-bold fs-3'>{ele.title}</p>
                    <p className='lead'>{ele.release_date && ele.release_date.substring(0,4)} </p>
                    <button className='btn btn-secondary' onClick={()=>{AddMovieToWatchList(ele)}} disabled={disabledBtn}>Add To WatchList</button>
                    </div>
                </div>

                <hr />

            </div>
            )
        }) 

        }

        {
            type === 'WatchList' && 
            Movies.map((ele)=>{

            return(
                <div className='logo text-light me-5 my-3' onMouseEnter={show}  key={ele.id}> 
                        <img 
                        src={ele.backdrop_path && `https://image.tmdb.org/t/p/w200${ele.backdrop_path}`}
                        alt='...'
                        className='movie-img'
                        />
                        <span className='btn btn-outline-danger '> <FontAwesomeIcon icon={faEye} onClick= { ()=> AddMovieToWatched(ele) }  /> </span>
                        <span className='btn btn-outline-danger'> <FontAwesomeIcon icon={faClose} onClick= {()=> RemoveMovieFromWatchList(ele.id) }  /></span>
                </div>
            )
        }) 

        }

        {
            type === 'Watched' && 
            Movies.map((ele)=>{

            return(
            <div key={ele.id}>

                <div className='mb-5 d-flex justify-content-start align-items-center flex-wrap'>
                    <div className='logo text-light me-5 my-3' onMouseEnter={show}> 
                        <img 
                        src={ele.backdrop_path && `https://image.tmdb.org/t/p/w200${ele.backdrop_path}`}
                        alt='...'
                        className='movie-img'
                        />
                        <span className='btn btn-outline-warning '> <FontAwesomeIcon icon={faEyeSlash} /></span>
                        <span className='btn btn-outline-warning '> <FontAwesomeIcon icon={faClose} onClick={()=>RemoveMovieFromWatched(ele.id)} /></span>
                    </div>

                    <div className='info'>
                    <p className='fw-bold fs-3'>{ele.title}</p>
                    <p className='lead'>{ele.release_date && ele.release_date.substring(0,4)} </p>
                    <button className='btn btn-outline-danger' onClick={()=>{BackMovieToWatchListFromWatched(ele)}} > Back To WatchList </button>
                    </div>
                </div>

                <hr />

            </div>
            )
        }) 

        }

        </>
)
}

export default MovieCard