import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "./authenticated.type"


let token = localStorage.getItem("token")
const initalState = {
    loading : false,
    data : {
        token : token,
        isAuth : !!token,
        user : ""
    },
    error : ""
}

export const Authreducer = (state = initalState , {type , payload}) => {

    switch(type) {


        case SIGNIN_LOADING : {
            return {
                ...state ,
                loading : true,
            }
        }

        case SIGNIN_SUCCESS : {
            localStorage.setItem("token" , payload.token)
            localStorage.setItem("user" , JSON.stringify(payload.user))
            return {
                ...state,
                loading : false,
                data : {
                    token : payload.token,
                    isAuth : true,
                    user : payload.user
                }
                
            }
        }

        case SIGNIN_ERROR : {
            return {
                ...state,
                loading : false,
                error : payload
            }
        }
        case SIGNOUT_SUCCESS : {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            
            return initalState
        }

        default : {
            return state
        }
    }

}