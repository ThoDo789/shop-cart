import {GET_USERS,USERS_ERROR} from "../../types";
const initialState ={
    users:[],
    loading:true,
}
const userReducer =(state=initialState,action)=>{
            switch (action.type){
                case GET_USERS:
               

                    return {
                        ...state,
                        users:action.payload,
                        loading: false
                    }
                case USERS_ERROR:
                    return {
                        user:action.payload,
                        loading: false
                    }
                    

                default:
                    return state
            }
}
export default userReducer