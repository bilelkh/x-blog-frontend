import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,

} from "./types";
 export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = { email: email, password: password };


    try {
        const res = await axios.post('/authentification/signin', body, config);
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            // errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }


}