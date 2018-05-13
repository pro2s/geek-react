import * as types from '../constants/appActionTypes';

export const selectedPage = (state = '', action) => {
  switch (action.type) {
    case types.SELECT_PAGE:
      return action.pageId
    default:
      return state
  }
}

const siteInitialState = {
   name: '',
   pages: [],
   pagesInfo: {} 
}
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
      state.pagesInfo[action.initAction.pageId] = action.data;
      return {
        ...state
      };
    default:
      return state;
  }
};
