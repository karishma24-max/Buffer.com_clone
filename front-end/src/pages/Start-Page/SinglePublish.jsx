import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Template1 from "../../components/Templates/Template1"
import Template2 from "../../components/Templates/Template2"
import Template3 from "../../components/Templates/Template3"
import Template4 from "../../components/Templates/Template4"
import { getTemplate } from "../../redux/Template/template.action"

export default function SinglePublish() {

    const data = useSelector((store) => store.template.templatearr)
    const { id } = useParams()
 
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTemplate(id))
    },[id])

    if (id === "636f9741b7cd3418c565192e") {
        return <Template1 data={data} />
    } else if (id === "636f9741b7cd3418c565192f") {
        return <Template2 data={data} />

    } else if (id === "636f9741b7cd3418c5651930") {
        return <Template3 data={data} />
    } else {
        return <Template4 data={data} />
    }

}