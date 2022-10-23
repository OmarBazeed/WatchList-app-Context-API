import { createContext, useEffect, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
export const InitialState = {
    WatchList: localStorage.getItem('WatchList')? JSON.parse(localStorage.getItem('WatchList')):[],
    Watched: localStorage.getItem('Watched')? JSON.parse(localStorage.getItem('Watched')):[],
}


// GlobalContext Using createContext(object)
export const GlobalContext = createContext(InitialState);


// Context Provider (Which Will Wrape All Your Application) So It Takes -props- As A Parameter To Retrun Your GlobalContext.Provider With The Values ==>( Which In The Initial State And Also Have The Actions We Added To Modify The State ) To Wrap the props.children As Shown Here ....>>

// We Also Have To Use useReducer To Make A Global Reducer Which Controls The State Of The GlobalContext And The Provider Takes All Of useReducer Equation , Actions Functions To Dispatch The Objects Which Carry The Data  
export const GlobalProvider = (props) => {

    const [state, dispatch] = useReducer(AppReducer, InitialState);

    // Actions 
    const AddMovieToWatchList = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const RemoveMovieFromWatchList = (id) =>{
        dispatch({type:'REMOVE_MOVIE_FROM_WATCHLIST', payload:id})
    }

    const AddMovieToWatched = (movie) =>{
        dispatch({type:'ADD_MOVIE_TO_WATCHED', payload:movie})
    }

    const BackMovieToWatchListFromWatched = (movie) =>{
        dispatch({type:'BACK_MOVIE_TO_WATCHLIST_FROM_WATCHED' , payload:movie })
    }

    const RemoveMovieFromWatched = (id) =>{
        dispatch({type:'REOME_MOVIE_FROM_WATHED' , payload:id})
    }

// To Control The Local Storage We Use useEffect Method To Be In The Right Way ===> We Also Can Use bake,read Cookies By Setuping The fs-cookies  
    useEffect(() => {
        localStorage.setItem('WatchList', JSON.stringify(state.WatchList));
        localStorage.setItem('Watched', JSON.stringify(state.Watched));
    }, [state])


    return (
        
        // This The Most Important Part Which We Have To Wrape All The Application With The GlobalContext.Providre And Give It All The Values Which Where In The Initial State And The Actions We Made In The useReducer Method And We Wrape By Calling {props.children} ... Then We Go To The app.jsx File And Import The Constant (GlobalProvider) Which Return The GlobalContext With It's Values And Wrap All The app Componenets With The Element ==>  <GlobalProvider> all components of your app <GlobalProvider />  

        <GlobalContext.Provider value={{
            WatchList:state.WatchList,
            Watched:state.Watched,
            AddMovieToWatchList,
            RemoveMovieFromWatchList,
            AddMovieToWatched,
            BackMovieToWatchListFromWatched,
            RemoveMovieFromWatched,
        }}>

            {props.children}

        </GlobalContext.Provider>
    )
}