import { ContactMe } from "./Sections/ContactMe"
import { Education } from "./Sections/Education"
import { Footer } from "./Sections/Footer"
import { Header } from "./Sections/Header"
import { Hero } from "./Sections/Hero"
import { Projects } from "./Sections/Projects"
import { Skills } from "./Sections/Skills"
import { Toaster } from "react-hot-toast"
import heroBg from '../src/assets/bgImages/heroBg.jpg'

function App() {
  

  return (
  <div className="relative border-green-500  w-[100%] h-[100%] p-4  ">
    <img src={heroBg} alt="" className="absolute top-0 left-0 h-[100%] w-screen z-0 " />

<Toaster />

      <div className="flex flex-col  border-blue-500 items-center z-1 relative ">
        <Header/>
        <Hero/>

        <Projects/>
        <Skills/>
        <Education/>
        <ContactMe/>
        <Footer/>
      </div>
    
    


  </div>
  
  )
}

export default App
