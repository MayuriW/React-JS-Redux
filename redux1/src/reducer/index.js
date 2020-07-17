//main reducer has all reducer combined
import {combineReducers} from "redux";
import movies  from './movie_Reducer'

const rootReducer = combineReducers( {
    movies
})

export default rootReducer;