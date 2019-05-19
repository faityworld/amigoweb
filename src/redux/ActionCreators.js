// Import everything from ation types
import * as ActionTypes from './ActionTypes';
import { logoutService } from '../services/loginService';
import { fetchNewsService } from '../services/fetchNews';


export const fetchNews = () => (dispatch) => {
    dispatch(loadingNews(true));

    fetchNewsService()
        .then(news => {dispatch(addNews(news['articles']))})
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
export const loadingNews = () => ({ type: ActionTypes.LOAD_NEWS_LOADING });
  
export const checkUser = () => (dispatch) => {

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

    return !state ? dispatch(openMainMenu()) : dispatch(closeMainMenu());
}
export const openMainMenu = () => ({ type: ActionTypes.OPEN_MENU });
export const closeMainMenu = () => ({ type: ActionTypes.CLOSE_MENU });

