import {SET_LOGGED_IN, SET_USER_NAME} from "./actions";
import {isUserLoggedIn} from "../services/auth_requests";

const initialState = {
    loggedIn: isUserLoggedIn(),

    userName: localStorage.getItem("userName")
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_IN: {
            return {...state, loggedIn: action.payload};
        }
        case SET_USER_NAME: {
            return {...state, userName: action.payload};
        }
        default: {
            return state;
        }
    }
}