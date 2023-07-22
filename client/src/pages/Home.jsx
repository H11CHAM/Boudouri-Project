import React from "react";
import { coursesData } from "../coursesData";
import Course from "../components/Course";

function Home(){
    return <>
            
       <div className='container-fluid section' id="firstSection">
   <div className='imageContainer '>
     <h1 id="introAnimation">Hicham el boudouri</h1>
   </div> 
         
   </div>
   
   <div className='container-fluid section' id="secondSection">
          <h1>explore the best knowledge enhancer, the best math <bold >courses</bold>  you will ecounter ever !  </h1>
          <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="#" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="#" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="#" class="d-block w-100" alt="..."/>
    </div>
   </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
     </button>
     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
     </button>
    </div>
   </div> 

   {/* third section !  */}
      <div className="container-fluid section" id="thiedSection">

        {coursesData.map(courseInfo => {
           return <Course data={courseInfo} 
             />
        })}
          
          {}




      </div>
    </>
}
export default Home;