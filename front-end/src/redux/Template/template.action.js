import { getIdTemplate, get_template } from "./template.type";
import axios from 'axios'

export const getTemplate = (id) => async (dispatch) => {
    let response = await axios.get(`http://localhost:8080/Template/${id}`)
    let data = await response.data
    dispatch({ type: get_template, payload: data })

    
}


export const updateTemplate = async (id , _name , _title ) => {
    let response = await axios.patch(`http://localhost:8080/Template/${id}` , {
        [_name] : _title
    })
    
}





