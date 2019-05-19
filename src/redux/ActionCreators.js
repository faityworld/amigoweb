// Import everything from ation types
import * as ActionTypes from './ActionTypes';
import { logoutService } from '../services/loginService';

import { fetchNewsAPI } from '../services/fetchNews';


export const fetchNews = () => (dispatch) => {
    dispatch(loadingNews(true));

    return fetch('https://newsapi.org/v2/top-headlines?' +
        'country=us&' + 'pageSize=10&' +
        'apiKey=3001fa4a68f744de993966133042a8f5')
        .then(response => {
            if (response.ok) return response;
            else {
                throw new Error(response.status);
            }
        })
        .then(response => response.json())
        .then(news => {
            console.log('fetch')
            return dispatch(addNews(news['articles']))
        })
        .catch(err => dispatch(newsFailed(err.message)));
}

export const newsFailed = (errmess) => ({
    type: ActionTypes.LOADNEWS_FAILED,
    payload: errmess
});

export const addNews = (news) => ({
    type: ActionTypes.LOAD_NEWS,
    payload: news
});
export const loadingNews = () => {
    console.log('loading start')
    return { type: ActionTypes.LOAD_NEWS_LOADING }
};

export const checkUser = () => (dispatch) => {
    console.log('cheking');
    if (localStorage.getItem('login')) {
        return dispatch(resolveUser());
    }
    else return dispatch(rejectUser());
}
export const resolveUser = () => ({ type: ActionTypes.CHECK_USER });

export const rejectUser = () => ({ type: ActionTypes.CHECKUSER_FAILED });

export const logOut = () => (dispatch) => {
    logoutService()
    return dispatch(rejectUser());
}

export const clickMenuButton = (state) => (dispatch) => {
    console.log('state: ', state);
    return !state ? dispatch(openMainMenu()) : dispatch(closeMainMenu());
}
export const openMainMenu = () => ({ type: ActionTypes.OPEN_MENU });
export const closeMainMenu = () => ({ type: ActionTypes.CLOSE_MENU });

