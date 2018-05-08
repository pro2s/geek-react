import * as types from '../constants/appActionTypes';

export const getPageItems = pageId => ({ type: types.GET_PAGE_DATA, pageId });
