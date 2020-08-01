const ADD_FAVORITE = 'ADD_FAVORITE';

const initState = [];

const FavoriteReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.movie]
        default:
            return state
    }
}

export default FavoriteReducer;