
import * as ActionTypes from './ActionTypes';


export const News = (state = { isLoading: true, errMess: null, news:[]}, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_NEWS:
            return {...state, isLoading: false, errMess: null, news: action.payload};
        
        case ActionTypes.LOAD_NEWS_LOADING:
            return {...state, isLoading: true, errMess: null};

        case ActionTypes.LOADNEWS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};