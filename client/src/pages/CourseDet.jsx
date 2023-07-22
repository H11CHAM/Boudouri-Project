import React from 'react'
import { useContext } from 'react'
import { CourseContext } from '../CourseContext'
import { coursesData } from '../coursesData';

function CourseDet(){
    const {id} = useContext(CourseContext);
    
    coursesData.filter((course)=>{
       course.id === parseInt(id);
    })
   

}
export default CourseDet;