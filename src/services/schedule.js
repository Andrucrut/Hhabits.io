import axios from "axios";

import {getAccessAuthHeader, setNewAccessToken} from "./auth_requests";


const API_URL = "https://api.tracker.itmodev.ru/api/schedule";


export async function scheduleGenerate(username, tasks) {
    try {
        const response = await axios.post(API_URL + "/generate", { tasks : tasks},
            {headers: getAccessAuthHeader()});
        return response.data;
    } catch (err) {
        if (err.response.status === 403) {
            setNewAccessToken().then(() => {return scheduleGenerate(username, tasks)});
        }
        return err;
    }
}

export async function scheduleGet() {
    try {
        const response = await axios.get(API_URL + "/schedule",
            {headers: getAccessAuthHeader()});
        return response.data;
    } catch (err) {

        return err;
    }
}

export async function scheduleDelete() {
    try {
        const response = await axios.delete(API_URL,
            {headers: getAccessAuthHeader()});
        return response.data;
    } catch (err) {
        if (err.response.status === 403) {
            setNewAccessToken().then(() => {return scheduleDelete()});
        }
        return err;
    }
}