
import "./App.css"
import Home from './components/Home';
import About from "./components/About"
import Navbar from "./components/Navbar"
import Testimonial from "./components/Testimonial"
import Trade from "./components/Trade"
import Contact from "./components/Contact"



const App = () => {
  return (
    <main className='overflow-x-hidden bg-black/70 flex flex-col items-center relative min-h-screen w-screen overflow-hidden'>
   <section  className=""><Navbar/></section>
   <section id="home" className='w-screen overflow-x-hidden'><Home/></section>
  <section id="about" className=' p-2 w-screen overflow-x-hidden'><About/></section> 
  <section id="testimonial" className='p-2 w-screen overflow-x-hidden'><Testimonial/></section> 
  <section id="trade" className='p-2 w-screen overflow-x-hidden'><Trade/></section> 
  <section id="contact" className='p-2 w-screen overflow-x-hidden'><Contact/></section> 
   </main>
  )
};

export default App

