
import './app.css';
import Navbar from './components/navbar'

const navbar = document.querySelector('nav');
function toggleVisibility(){
  const element = document.getElementById('firstSection');
   var scrollBottom = element.scrollHeight / 2;
  

  const scrollPosition = window.scrollY ||window.pageYOffset;
  if (scrollPosition >= 150 || scrollPosition >= scrollBottom) {
    navbar.classList.add('hidden')
  }else {
    navbar.classList.remove('hidden');
  }
  

}
window.addEventListener('scroll',toggleVisibility);

document.addEventListener('scroll',function(event){
     const desiredDistance = 150;
    var  classes = navbar.classList;
    if(document.documentElement.scrollTop >= desiredDistance ) {
      classes.add('hidden');
    } else {
      classes.remove('hidden')
    }


})


function App() {
  return <>
   <div className='container-fluid section' id="firstSection">

   <Navbar/>
     this is the first section 

   </div>
   
   <div className='container-fluid section' id="secondSection">

     this is the second section 

   </div>
  </>
}

export default App;
