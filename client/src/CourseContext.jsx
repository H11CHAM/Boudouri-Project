import React from "react";
import { createContext ,useState} from "react";



export const  CourseContext = createContext({});


export const CourseContextProvider = (props)=>{
    const [id,setId] = useState("");
    function passId(id){

      setId(id.toString())

    }
    contextValues ={id,passId} ;
    return <CourseContext.Provider value={contextValues}>{props.children} </CourseContext.Provider>
}

