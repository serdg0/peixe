const CHANGE_SEARCH = 'CHANGE_SEARCH';
const ADD_FAVORITE = 'ADD_FAVORITE';

export const searchAction = query => ({
    type: CHANGE_SEARCH,
    query,
});

export const addFavorite = movie => ({
    type: ADD_FAVORITE,
    movie
})
