const CHANGE_SEARCH = 'CHANGE_SEARCH';
const SHOW_MOVIE = 'SHOW_MOVIE';

export const searchAction = query => ({
    type: CHANGE_SEARCH,
    query,
});

export const showAction = movie => ({
    type: SHOW_MOVIE,
    movie
})
