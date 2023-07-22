import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CourseContext } from "../CourseContext";

function Course(props){
     const {passId} = useContext(CourseContext)
     const {title,price,description,imgURL,id} = props.data;
    return  <>
         <div className="courseContainer">

           <div className="imgCont">

                <img src={imgURL} alt="Math_Course" />
           </div>

           
             
             <Link to='/CourseDet' onClick={()=> {
                passId(id)
             }} >  <h3 id="courseTitle"  >{title}</h3> </Link>
             
              <p>{description} 
                   <solid>{price} </solid>
              </p>
              
          </div>

    </>
}
export default Course;