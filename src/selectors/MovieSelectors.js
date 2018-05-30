import { createSelector } from 'reselect'

const getMovies = (state) => state.movieReducer.movies
const getAppReducer = (state) => state.appReducer

export const moviesSelector = createSelector(
    [ getAppReducer, getMovies ],
    (appReducer, movies) => {
        return movies.filter(movie => {
            const { startDate, endDate } = appReducer;
            const isValidStartTime = movie.startDate >= startDate && movie.startDate <= endDate;
            const isValidEndTime = movie.endDate >= startDate && movie.endDate <= endDate;
            return isValidStartTime || isValidEndTime
        })

    }
)