import {combineReducers} from 'redux';
import SearchReducer from './search';
import FavoriteReducer from './favorites';

const rootReducer = combineReducers({
    movies: SearchReducer,
    favorites: FavoriteReducer,
})

export default rootReducer;