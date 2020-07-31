import {combineReducers} from 'redux';
import SearchReducer from './search';
import ShowReducer from './show';

const rootReducer = combineReducers({
    movies: SearchReducer,
    show: ShowReducer,
})

export default rootReducer;