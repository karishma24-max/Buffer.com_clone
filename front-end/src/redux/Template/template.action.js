import { getIdTemplate, get_template } from "./template.type";
import axios from 'axios'

export const getTemplate = (id) => async (dispatch) => {
    let response = await axios.get(`  http://localhost:8080/Template/${id}`)
    let data = await response.data
    dispatch({ type: get_template, payload: data })
}

export const getId = (id) => (dispatch) => {
    dispatch({type : getIdTemplate , payload : id})
}




// export const updateTemplate = async (  ) => {
//     let response = await axios.patch(`http://localhost:8080/Template/1` , {
//         heading1content : headingcontent
//     })
// }





