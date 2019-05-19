import * as ActionTypes from './ActionTypes';

export const Login = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.CHECK_USER:
            return true;

        case ActionTypes.CHECKUSER_FAILED:
            return false

        default:
            return state;
    }
};