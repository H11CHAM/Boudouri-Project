import React from 'react'
import { useContext } from 'react'
import { CourseContext } from '../CourseContext'
import { coursesData } from '../coursesData';

function CourseDet(){
    const {id} = useContext(CourseContext);
    
   const filteredCourse =  coursesData.filter((course)=>{
     return  course.id === parseInt(id);
    })
   console.log(filteredCourse);
   
   return <div>
   <img src={filteredCourse.imgURL} alt="" />
   <h3>{filteredCourse.title}</h3>



   </div>
   
}
export default CourseDet;