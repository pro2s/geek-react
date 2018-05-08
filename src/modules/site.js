import * as types from '../constants/appActionTypes';

const siteInitialState = { name: '', pages: [], pagesItems: {} };
export default (state = siteInitialState, action) => {
  switch (action.type) {
    case types.GET_SITE_DATA_RECEIVED:
      const { name, pages } = action.data;
      return {
        ...state,
        name,
        pages
      };
    case types.GET_PAGE_DATA_RECEIVED:
      state.pagesItems[action.initAction.pageId] = action.data.items;
      return {
        ...state
      };
    default:
      return state;
  }
};
