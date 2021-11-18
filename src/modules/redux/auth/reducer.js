import { LocalStorageService } from "utils/storage";
import { FORGOT_PASSWORD_ACTION, LOGIN_FAILED, LOGIN_PROCESS, LOGIN_SUCCESS, LOGOUT_USER, RESET_PASSWORD_ACTION } from "./action";
// import {
//     LOGIN_PROCESS,
//     LOGIN_SUCCESS,
//     LOGIN_FAILED,
//     FORGOT_PASSWORD_ACTION,
//     RESET_PASSWORD_ACTION,
//     LOGOUT_USER
// } from "./action";

const initialState = {
    loading: false,
    errorMessage: ''
}

const localStorage = LocalStorageService.getService();

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PROCESS:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            }
        case LOGIN_SUCCESS:
            localStorage.setToken(action.payload);
            return {
                ...state,
                loading: false,
                errorMessage: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            }
        case FORGOT_PASSWORD_ACTION:
            return {
                ...state,
                loading: action.payload
            }
        case RESET_PASSWORD_ACTION:
            return {
                ...state,
                loading: action.payload
            }
        case LOGOUT_USER:
            localStorage.clearToken();
            localStorage.clearPermissions();
            localStorage.clearModules();
            return {...state}
        default:
            return state;
    }
}