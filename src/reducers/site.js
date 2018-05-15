import * as types from '../actions/types';

export const description = (state = { id: '', html: '' }, action) => {
  switch (action.type) {
    case types.GET_PAGE_DESCRIPTION_RECEIVED:
      return {
        id: action.id,
        html: action.data
      };
    default:
      return state;
  }
};

export const sections = (state = {}, action) => {
  switch (action.type) {
    case types.GET_SECTION_DATA_RECEIVED:
      return {
        ...state,
        [action.section]: action.data
      };
    default:
      return state;
  }
};

export default (state = { name: '', sections: [] }, action) => {
  switch (action.type) {
    case types.GET_SITE_DATA_RECEIVED:
      const { name, sections } = action.data;
      return {
        ...state,
        name,
        sections
      };
    default:
      return state;
  }
};
