import {combineReducers} from 'redux';
import SearchReducer from './search';

const rootReducer = combineReducers({
    movies: SearchReducer,
})

export default rootReducer;