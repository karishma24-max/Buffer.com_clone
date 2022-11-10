import { get_template, update_template } from "./template.type"

const initalState = []

export const Templatereducer = (state = initalState , {type, payload}) => {
    switch(type) {

        case get_template : {
            return {
                ...state,
                payload
            }
        }

        case update_template : {
            return {
                ...state,
            }
        }

        default : {
            return state
        }
    }
}