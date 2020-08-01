const CHANGE_SEARCH = 'CHANGE_SEARCH';

const initState = [];

const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return action.query;
    default:
      return state;
  }
};

export default SearchReducer;
