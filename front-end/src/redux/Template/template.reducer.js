import { getIdTemplate, get_template, update_template } from "./template.type"

const initalState = {
    templatearr : {},
}

export const Templatereducer = (state = initalState , {type, payload}) => {
    switch(type) {

        case get_template : {
            return {
                ...state,
                templatearr : payload
            }
        }

        case update_template : {
            return {
                ...state,
            }
        }
        case getIdTemplate : {
            return {
                ...state,
                id : payload
            }
        }

        default : {
            return state
        }
    }
}