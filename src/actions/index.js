const CHANGE_SEARCH = 'CHANGE_SEARCH';

export const searchAction = query => ({
    type: CHANGE_SEARCH,
    query,
});