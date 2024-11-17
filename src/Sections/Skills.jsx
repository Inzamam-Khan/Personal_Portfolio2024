import {  SKILLS } from "../Constants"
import {motion} from 'motion/react'
export const Skills =()=>{
    return (
        <div className=" border-red-500 w-full flex flex-col items-center mx-auto mt-4"> 
       
        <h3 id="skills" className="text-center text-4xl bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">SKILLS</h3>



                <motion.div 
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:.6}}
                className=" border-red-500 flex  items-center justify-center flex-wrap w-full  gap-2 p-4 ">

                    {SKILLS.map((item)=>(
                        <div className="flex items-center gap-4 justify-center max-md:justify-start  max-md:w-1/3 max-md:flex-1 md:w-1/4 my-8 max-md:my-6 ">
                            <span className="">{item.icon}</span>
                            <h3 className="text-2xl font-semibold text-slate-300" >{item.name}</h3>
                        </div>
                    ))}




                </motion.div>

  </div>

    )
}