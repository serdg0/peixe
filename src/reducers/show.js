const SHOW_MOVIE = 'SHOW_MOVIE';

const initState = {};

const ShowReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_MOVIE:
            return action.movie
        default:
            return state
    }
}

export default ShowReducer;