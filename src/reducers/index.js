import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import MovieReducer from "./MovieReducer"
import AppReducer from "./AppReducer"

export default combineReducers({
    routing: routerReducer,
    appReducer: AppReducer,
    movieReducer: MovieReducer

})