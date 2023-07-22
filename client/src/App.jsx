
import './app.css';
import Navbar from './components/navbar'
import { createRoutesFromElements,createBrowserRouter,RouterProvider,Route,Outlet } from 'react-router';
import Home from './pages/Home';
import Course from './pages/CourseDet';
const Layout = ()=>{
  return <>
  <Navbar/>

  <Outlet/>
  </>
}






const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
     <Route index element ={<Home/>}/>
     <Route path='/course' element={<Course/>}/>
   </Route>

  )
)



/*document.addEventListener('scroll',function(event){
     const desiredDistance = 150;
    var  classes = navbar.classList;
    if(document.documentElement.scrollTop >= desiredDistance ) {
      classes.add('hidden');
    } else {
      classes.remove('hidden')
    }
})*/


function App() {
  
//const navbar = document.querySelector('nav');
/*function toggleVisibility(){
  const element = document.getElementById('firstSection');
   var scrollBottom = element.scrollHeight / 2;
  

  const scrollPosition = window.scrollY ||window.pageYOffset;
  if (scrollPosition >= 150 || scrollPosition >= scrollBottom) {
    navbar.classList.add('hidden')
  }else {
    navbar.classList.remove('hidden');
  }
  

}*/
//window.addEventListener('scroll',toggleVisibility);





  return <>
     

<RouterProvider router={router} />


   
  </>
}

export default App;
