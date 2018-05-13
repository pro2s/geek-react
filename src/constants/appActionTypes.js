import { getReceivedAction } from '../services/dataService';
export const GET_SITE_DATA = 'GET_SITE_DATA';
export const GET_SITE_DATA_RECEIVED = getReceivedAction(GET_SITE_DATA);
export const GET_PAGE_DATA = 'GET_PAGE_DATA';
export const GET_PAGE_DATA_RECEIVED = getReceivedAction(GET_PAGE_DATA);
export const SELECT_PAGE = 'SELECT_PAGE';