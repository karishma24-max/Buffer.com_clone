import { SIGNIN_ERROR, SIGNIN_LOADING, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from "./authenticated.type"


let token = localStorage.getItem("token")
const initalState = {
    loading : false,
    data : {
        token : token,
        isAuth : !!token,
        user : ""
    },
    error : false
}

export const Authreducer = (state = initalState , {type , payload}) => {

    switch(type) {


        case SIGNIN_LOADING : {
            return {
                ...state ,
                loading : true,
                error : false
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
                },
                error : false
                
            }
        }

        case SIGNIN_ERROR : {
            return {
                ...state,
                loading : false,
                error : true
            }
        }
        case SIGNOUT_SUCCESS : {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            
            return {
                ...state,
                data : {
                    token : "",
                    isAuth : false,
                    user : ""
                },
            }
        }

        default : {
            return state
        }
    }

}