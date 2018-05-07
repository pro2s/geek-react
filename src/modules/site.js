import * as types from '../constants/appActionTypes'

const siteInitialState = { name: "", pages : [] }
export default (state = siteInitialState, action) => {
    switch (action.type) {
        case types.GET_SITE_DATA_RECEIVED:
            return getSiteData(action) 
        default:
            return state
    }
}

function getSiteData(action) {
    return action.data;
}
