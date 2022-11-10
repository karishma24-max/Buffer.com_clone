import { get_template, update_template } from "./template.type";
import axios from 'axios'

export const getTemplate = (path) => async (dispatch) => {
    let response = await axios.get(`http://localhost:8080/${path}`)
    let data = await response.data
    dispatch({ type: get_template, payload: data })
}



// export const updateTemplate = async () => {
//     let response = await axios.put("  http://localhost:8080/Traveler-Template/", {
//         image1: {
//             display: "block",
//             boxSize: "100px",
//             objectFit: "cover",
//             src: "https://buffer-start-page-uploads.s3.amazonaws.com/defaults/flowers/flowers-shop-profile.png",
//             alt: "main logo"
//           }
//     })
// }




