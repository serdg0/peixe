const CHANGE_SEARCH = 'CHANGE_SEARCH';

const searchAction = query => ({
  type: CHANGE_SEARCH,
  query,
});

export default searchAction;
