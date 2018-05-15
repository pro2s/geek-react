import * as types from './types';

export const getSection = section => ({
  type: types.GET_SECTION_DATA,
  section
});
export const getPageDescription = id => ({
  type: types.GET_PAGE_DESCRIPTION,
  id
});
