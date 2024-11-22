import { ContactMe } from "./Sections/ContactMe"
import { Education } from "./Sections/Education"
import { Footer } from "./Sections/Footer"
import { Header } from "./Sections/Header"
import { Hero } from "./Sections/Hero"
import { Projects } from "./Sections/Projects"
import { Skills } from "./Sections/Skills"
import { Toaster } from "react-hot-toast"


function App() {
  

  return (
  <div className=" border-green-500  w-[100%] h-[100%] p-4  bg-hero bg-cover bg-center bg-fixed">

<Toaster />

      <div className="flex flex-col  border-blue-500 items-center  ">
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
