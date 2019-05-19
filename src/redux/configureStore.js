import {createStore, combineReducers, applyMiddleware} from 'redux';
import { News } from './news';
import { Login } from './login';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            news: News,
            login: Login,            
        }),
        applyMiddleware(thunk)
    )
    return store
}