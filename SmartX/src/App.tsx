
import "./App.css"
import Hero from './components/Hero';
import About from "./components/About"
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"



const App = () => {
  return (
    <main className=' flex flex-col items-center relative min-h-screen w-screen overflow-hidden'>
   <div className=""><Navbar/></div>
   <div className='min-w-screen overflow-x-hidden'><Hero/></div>
  <div className='p-2 min-w-screen overflow-x-hidden'><About/></div> 
  <div className='p-2 min-w-screen overflow-x-hidden'><Testimonial/></div> 
   </main>
  )
};

export default App

