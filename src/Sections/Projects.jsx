import { PROJECTS } from "../Constants"
import {motion} from 'motion/react'
import userLogo from '../assets/bgImages/inzamamReactJs.jpeg'
export const Projects=()=>{
    return(
        <div className=" border-red-500 w-full flex flex-col items-center ">
            <h3 id="projects" className="text-center text-4xl bg-gradient-to-r from-blue-400 to-orange-400 text-transparent bg-clip-text">PROJECTS</h3>
           
           
           {/* container second image */}
            <motion.div 
            
        
            className=" border-red-500 max-w-[400px] md:max-w-[900px] flex flex-wrap p-4 md:px-10 gap-4 items-center justify-start mt-8">
               
                {PROJECTS.map((item,index)=>(
            <a href={item.link} target="_blank">
                    <motion.div
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:.6}}
                    key={index} className=" relative rounded-xl min-w-[200px]  max-md:w-[400px]   border border-neutral-500 ">


              
                                <div className=" bg-gradient-to-tr from-[#012a4a] to-[#6a040f] text-[#a9d6e5]
                                 rounded-xl w-full h-full flex flex-col items-start px-2 justify-center absolute cursor-pointer opacity-100"> 
                                    
                                    <h3 className="text-xl mb-4 text-center  w-full ">{item.name}</h3>
                                    <div className=" w-[100%] ">
                                        {item.description}
                                    </div>
                                    
                                </div> 

                        {/* <img src={item.image} title={item.name} alt={item.name} className="transition-all ease-in-out duration-500 md:h-[250px] rounded-xl w-full aspect-square hover:opacity-20 opacity-0 " /> */}
                        
<svg  className=" transition-all ease-in-out duration-500 md:h-[250px] rounded-xl w-full aspect-square hover:opacity-20 opacity-0 " 
viewBox="0 0 1920 1920"  xmlns="http://www.w3.org/2000/svg" id="Magenta-Blue-Green-Blurry-Ellipses--Streamline-Gradient-Bg"  stroke-width="1">
<g clip-path="url(#clip0_121_33)"><path fill="black" d="M0 0h1920v1920H0Z"></path><g filter="url(#filter0_f_121_33)"><path fill="#002ED2" d="M595.0920823799 355.8929202913A1264.73 911.971-9.38598 1 0 3090.68791762-56.6229202913 1264.73 911.971-9.38598 1 0 595.09208238 355.8929202913"></path></g><g filter="url(#filter1_f_121_33)"><path fill="#8905AA" d="M-816.6416062988-38.508119011a1004.84 732.468-2.53119 1 0 2007.7192125976-88.753961978A1004.84 732.468-2.53119 1 0-816.6416062988-38.508119011"></path></g><g filter="url(#filter2_f_121_33)"><path fill="#00726B" d="M755.9564052924 1334.3946749456a1180.57 772.897 9.45449 1 0 2329.0671894152 387.8506501088 1180.57 772.897 9.45449 1 0-2329.0671894152-387.8506501088"></path></g></g><defs><filter id="filter0_f_121_33" x="-413.859" y="-1773.67" width="4513.5" height="3846.61" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_121_33"></feGaussianBlur></filter><filter id="filter1_f_121_33" x="-1817.17" y="-1816.01" width="4008.78" height="3466.24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_121_33"></feGaussianBlur></filter><filter id="filter2_f_121_33" x="-251.043" y="-258.54" width="4343.07" height="3573.73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_121_33"></feGaussianBlur></filter><clipPath id="clip0_121_33"><path fill="white" d="M0 0h1920v1920H0Z"></path></clipPath></defs></svg>



                    </motion.div>
            </a>
                ))}
            </motion.div>
        </div>
    )
}