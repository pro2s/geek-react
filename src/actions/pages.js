import * as types from './types'

export const getPageItems = pageId => ({ type: types.GET_PAGE_DATA, pageId })
export const selectPage = pageId => ({ type: types.SELECT_PAGE, pageId })
export const getPageDescription = id => ({ type: types.GET_PAGE_DESCRIPTION, id })
