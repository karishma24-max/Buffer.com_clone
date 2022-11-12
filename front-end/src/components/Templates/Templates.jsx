import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template3 from "./Template3";
import Template4 from "./Template4"
import Template2 from "./Template2";
import Template1 from "./Template1";
import { useEffect } from "react";

export const Templates = () => {

    const data = useSelector((store) => store.template.templatearr)
    const { id } = useParams()


    if (id === "636fde4cf6a43916e145eafb") {
        return <Template1 data={data} />
    } else if (id === "636fde4cf6a43916e145eafc") {
        return <Template2 data={data}/>

    } else if (id === "636fde4cf6a43916e145eafd") {
        return <Template3  data={data}/>
    } else {
        return <Template4 data={data}/>
    }

}