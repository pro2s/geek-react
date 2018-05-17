import { getReceivedAction } from '../services/dataService';

export const GET_SITE_DATA = 'GET_SITE_DATA';
export const SET_SUBSCRIBE = 'SET_SUBSCRIBE';
export const GET_SITE_DATA_RECEIVED = getReceivedAction(GET_SITE_DATA);
export const GET_SECTION_DATA = 'GET_SECTION_DATA';
export const GET_SECTION_DATA_RECEIVED = getReceivedAction(GET_SECTION_DATA);
export const GET_PAGE_DESCRIPTION = 'GET_PAGE_DESCRIPTION';
export const GET_PAGE_DESCRIPTION_RECEIVED = getReceivedAction(GET_PAGE_DESCRIPTION);
