import axios from "axios";
import {store} from "../redux/store";
import {setLoggedIn, setUserName} from "../redux/actions";


const API_URL = "https://api.tracker.itmodev.ru/api/auth/";


export async function sendLoginRequest(username, password) {
    try {
        const response = await axios.post(API_URL + "login", { username: username, password: password });
        const accessToken = await response.data.accessToken;
        const refreshToken = await response.data.refreshToken;
        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
            localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
            store.dispatch(setLoggedIn(true));
            store.dispatch(setUserName(response.data.userName));
            localStorage.setItem("userName", JSON.stringify(response.data.userName).split('"')[1]);
        }
        return response;
    } catch (err) {
        if (err.response.status === 400 || err.response.status === 401) {
            throw new Error("Wrong username or password");
        } else {
            throw err;
        }
    }
}


export function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    store.dispatch(setLoggedIn(false));
    store.dispatch(setUserName(""));
}

export async function sendRegisterRequest(username, password) {
    try {
        return await axios.post(API_URL + "register", {
            username: username,
            password: password
        }).then(() => sendLoginRequest(username, password));
    } catch (err) {
        if (err.response.status === 409) {
            throw new Error("Username already exists");
        } else if (err.response.status === 400) {
            throw new Error("Username must be from 3 to 10 symbols long. Valid characters: [ a-z, A-Z, 0-9, _ ]");
        } else {
            throw err;
        }
    }
}

export function getAccessAuthHeader() {
    const accessTokenStr = localStorage.getItem("accessToken");
    if (accessTokenStr) {
        let accessToken = JSON.parse(accessTokenStr);
        if (accessToken) {
            return {Authorization: 'Bearer ' + accessToken};
        }
    }
    return {Authorization: ''};
}

function getRefreshToken() {
    const refreshTokenStr = localStorage.getItem("refreshToken");
    if (refreshTokenStr) {
        let refreshToken = JSON.parse(refreshTokenStr);
        if (refreshToken) {
            return refreshToken;
        }
    }
}

export async function setNewAccessToken() {
    try {
        const response = await axios.post(API_URL + "token", {refreshToken: getRefreshToken()});
        const accessToken = await response.data.accessToken;
        if (accessToken) {
            localStorage.setItem("accessToken", JSON.stringify(accessToken));
        }
    } catch (err) {
        logout();
        console.log(err);
    }
}
export function isUserLoggedIn() {
    return !!localStorage.getItem("refreshToken");
}
