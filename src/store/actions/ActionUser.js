import {USERS_ERROR, GET_USERS} from "../../types";
import axios from "axios";

export const getUser = () => async dispatch => {
    try{
        const res = await axios.get(`https://5fdf2d99eca1780017a3095c.mockapi.io/api/products`)
        dispatch({
            type:GET_USERS,
            payload:res.data
        })
    }catch (error){
        dispatch({
            type:USERS_ERROR,
            payload:error
        })
    }
}