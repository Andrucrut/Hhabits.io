export const SET_LOGGED_IN = "SET_LOGGED_IN";

export const SET_USER_NAME = "SET_USER_NAME";

export function setUserName(userName) {
    return {
        type: SET_USER_NAME,
        payload: userName
    }
}
export function setLoggedIn(loggedIn) {
    return {
        type: SET_LOGGED_IN,
        payload: loggedIn
    }
}