import Navbar from "./Navbar"
// import NavL from "./navL"
// import NavM from "./navM"
// import NavR from "./navR"
import Lefts from "./lft"
import SideNavbar from "./SideNavbar"
import Mainc from "./mnc"
import Cat from "./Cool"
import AboutApp from "./AboutApp"
import About from "./about"
import Contact from "./contact"
import Footer from "./footer"
import Aboutus from "./testinomial"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
// import ChatwootWidget from './ChatwootWidget'
import GoToTop from "./GoToTop";
import Random from "./Random"
import ParticleBack from "./Particle"
export default function Layout({children}) {

  console.log(children);
  return (
    <>
      <GoToTop/>
      {/*<Navbar/>*/}  {/* comment if u r going with the login page as this component already passed in the pages/_app.js*/}
     
      {<Random/>} 
       <div className="part ">
       <ParticleBack  />
       </div>

      <lms className = "h-screen flex flex-row justify-start"> {/* This lsm stand for the LEFT MAIN  and RIGHT-SIDE*/}
        {/* <Lefts/> */}
        <SideNavbar />
        <div className = "flex-1 p-4 text-white bg-gray-300">
          <Mainc>{children}</Mainc>
        </div>
        {/* <Rights/> */}
      </lms>
    
      <main className = "mn">
        <About/>
        <AboutApp />
        {/* <Aboutus /> */}
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}
