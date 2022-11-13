import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom"

export default function PrivRoutes({children}) {

    const {isAuth} = useSelector((store) => store.auth.data)
    

    if(isAuth) {
        return children
    } else {
       return <Navigate to={"/signin"} />
    }

}