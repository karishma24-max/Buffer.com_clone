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


    if (id === "636e69afc9e9d35240b19385") {
        return <Template1 data={data} />
    } else if (id === "636e69afc9e9d35240b19386") {
        return <Template2 data={data}/>

    } else if (id === "636e69afc9e9d35240b19387") {
        return <Template3  data={data}/>
    } else {
        return <Template4 data={data}/>
    }

    //id1 = 636df8ea89fa2c93fa685748
    //id2 = 636df8ea89fa2c93fa685749
    //id3 = 636df8ea89fa2c93fa68574a
}