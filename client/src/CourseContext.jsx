import React from "react";
import { createContext ,useState} from "react";



export const  CourseContext = createContext({});


export const CourseContextProvider = (props)=>{
  const [linkValue,setLinkValue] = useState(false);

    function handleClick(){
      setLinkValue(true)
    }


    const [id,setId] = useState("");
    function passId(id){

      setId(id.toString())

    }
   var contextValues ={id,passId,handleClick} ;
    return <CourseContext.Provider value={contextValues}>{props.children} </CourseContext.Provider>
}

