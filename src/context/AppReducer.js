export const AppReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_MOVIE_TO_WATCHLIST':
            return {...state, WatchList: [action.payload, ...state.WatchList] }

        case 'REMOVE_MOVIE_FROM_WATCHLIST':
            return {...state, WatchList: state.WatchList.filter(mov => mov.id !== action.payload) }

        case 'ADD_MOVIE_TO_WATCHED':
            return {...state, Watched: [action.payload, ...state.Watched], WatchList: state.WatchList.filter(mov => mov.id !== action.payload.id) }

        case 'BACK_MOVIE_TO_WATCHLIST_FROM_WATCHED':
            return {...state, Watched: state.Watched.filter(mov => mov.id !== action.payload.id), WatchList: [action.payload, ...state.WatchList] }

        case 'REOME_MOVIE_FROM_WATHED':
            return {...state, Watched: state.Watched.filter(mov => mov.id !== action.payload) }

        default:
            return state
    }

}