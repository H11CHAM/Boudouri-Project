import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { CourseContext } from "../CourseContext";

function Course(props){
     const {passId} = useContext(CourseContext)
     const {title,price,description,imageUrl,id} = props.data;
     
   console.log(`the url is ${imageUrl}`);
    return  <>
         <div className="courseContainer card" style={{width: "18rem"}}>

           <div className="card-img-top ">

                <img className="courseIMG" src={imageUrl} alt="Math_Course" style={{
                    width : "inherit",
                    height : "200px"
                }} />
           </div>

           
             <div className="card-body">
             <Link to='/CourseDet' onClick={()=> {
                return passId(id)
             }} >  <h3 className="card-title" id="courseTitle"  >{title}</h3> </Link>
                  <p className="card-text">{description} 
                   {price} 
               </p>
             </div>
          </div>

    </>
}
export default Course;