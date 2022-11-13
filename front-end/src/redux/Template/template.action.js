import { getIdTemplate, get_template } from "./template.type";
import axios from 'axios'


export const getTemplate = (id) => async (dispatch) => {
<<<<<<< HEAD
    let response = await axios.get(`${process.env.REACT_APP_URL}/template/${id}`)
=======
    let response = await axios.get(`${process.env.REACT_APP_TEMPLATE_URL}/${id}`)
>>>>>>> a555e7b2e1c1aad1961aca43ac3f4763b69b3371
    let data = await response.data
    console.log(data)
    dispatch({ type: get_template, payload: data })
}



export const updateTemplate = async (id , _name , _title ) => {
<<<<<<< HEAD
    let response = await axios.patch(`${process.env.REACT_APP_URL}/template/${id}` , {
=======
    let response = await axios.patch(`${process.env.REACT_APP_TEMPLATE_URL}/${id}` , {
>>>>>>> a555e7b2e1c1aad1961aca43ac3f4763b69b3371
        [_name] : _title
    })
    
}





