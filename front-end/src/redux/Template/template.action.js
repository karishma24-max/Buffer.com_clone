import { getIdTemplate, get_template } from "./template.type";
import axios from 'axios'


export const getTemplate = (id) => async (dispatch) => {
    let response = await axios.get(`${process.env.REACT_APP_URL}/template/${id}`)
    let data = await response.data
    console.log(data)
    dispatch({ type: get_template, payload: data })
}



export const updateTemplate = async (id , _name , _title ) => {
    let response = await axios.patch(`${process.env.REACT_APP_URL}/template/${id}` , {
        [_name] : _title
    })
    
}





