import React from "react";
import { coursesData } from "../coursesData";
import Course from "../components/Course";
import '../app.css';
import ComputerIcon from '@mui/icons-material/Computer';




function Home(){
    return <> 
       <div className='container-fluid section' id="firstSection">
   
     <h1 id="introAnimation">Hicham  </h1>
   </div>
   
   <div className='container-fluid section' id="secondSection">
          <h6>explore the best knowledge enhancer, the best math <bold >courses</bold>  you will ecounter ever !  </h6>
          <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
     <div className="item1" >
     <img src="https://i.pinimg.com/236x/40/eb/67/40eb671d928904686a63f25b61493051.jpg" className="d-block w-100 carousel-image" alt="..."/>
     </div>
      
      <div className="item2" >
           <h3>@Hicham_Boudouri</h3>
            <p className="tweetTag">@hichamELboudouri</p>
       </div>
       <div className="item3"><p>"
           gained a lot from this course , wery friendly instructor and very helpful and responding Q&A community !
            "</p></div>
    </div>
    <div class="carousel-item ">
    <div className="item1" >
    <img src="https://i.pinimg.com/236x/fc/f3/78/fcf378615f9e010f6e440045fbc8e34f.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="item2" >
           <h3>@abdellah_yazighi</h3>
           <p className="text-body-secondary tweetTag "><small>@hichamELboudouri</small></p>
       </div>
       <div className="item3"><p>"
            great course , i had the opportunity to learn and excel mathematics 
            great insturctor perfect communication skills and exchanging infos !
            "</p></div>
    </div>
    <div class="carousel-item">
      <div className="item1"><img src="https://i.pinimg.com/236x/db/98/48/db984804b1c11c4815171faf6cd1175e.jpg" className="d-block w-100" alt="..."/>  </div>
      <div className="item2" >
           <h3>@khlahni</h3>
           <p className="tweetTag"><small>@thereal-reaper</small></p>
       </div>
       <div className="item3"><p>"
           i got a bachelor degree in maths and data-analytics after completing this course!
            "</p></div>
    </div>
   </div>
   <button class="carousel-control-prev cont-btn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
   
  </button>
  <button class="carousel-control-next cont-btn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" ></span>
 
  </button>
    </div>
   </div> 

   {/* third section !  */}
      <div className="container-fluid section " id="thirdSection" >
        
        {coursesData.map(courseInfo => {
           return <Course data={courseInfo} key={courseInfo.id} 
             />
        })}
      </div>
    </>
}
export default Home;