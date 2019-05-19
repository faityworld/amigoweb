import * as ActionTypes from './ActionTypes';

export const ClickButton = (state = false, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_MENU:
            return true;

        case ActionTypes.CLOSE_MENU:
            return false

        default:
            return state;
    }
};