import * as types from '../actions/types'

export const selectedPage = (state = '', action) => {
  switch (action.type) {
    case types.SELECT_PAGE:
      return action.pageId
    default:
      return state
  }
}

export const description = (state = {id: '', html: ''}, action) => {
  switch (action.type) {
    case types.GET_PAGE_DESCRIPTION_RECEIVED:
      return {
         id: action.id,
         html: action.data
      }
    default:
      return state
  }
}


const site = {
   name: '',
   pages: [],
   pagesInfo: {} 
}
export default (state = site, action) => {
  switch (action.type) {
    case types.GET_SITE_DATA_RECEIVED:
      const { name, pages } = action.data
      return {
        ...state,
        name,
        pages
      }
    case types.GET_PAGE_DATA_RECEIVED:
      state.pagesInfo[action.pageId] = action.data
      return {
        ...state
      }
    default:
      return state
  }
}
