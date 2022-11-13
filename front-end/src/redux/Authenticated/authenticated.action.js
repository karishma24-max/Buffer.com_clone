import axios from "axios"
import {  SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "./authenticated.type"

export const login = (creds) => async (dispatch) => {
    dispatch({type : SIGNIN_LOADING})
    try {
        let res = await axios.post(process.env.REACT_APP_USER_SIGIN_URL , creds)

        let data = await res.data

        dispatch({type : SIGNIN_SUCCESS , payload : data})

    } catch (err) {
        dispatch({type : SIGNIN_ERROR , payload : err.response.data})
    }
}

export const logout = () => ({type : SIGNOUT_SUCCESS})