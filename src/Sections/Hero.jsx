import userLogo from '../assets/bgImages/inzamamReactJs.jpeg'

import {motion} from 'motion/react'



import { useEffect, useState } from 'react'

// import CursorBlinker from './Components/CursorBlinker'
import { animate, useMotionValue, useTransform } from 'framer-motion';
import CursorBlinker from '../Components/CursorBlinker';
export const Hero=()=>{

    const myName = "Inzamam Khan";
    const myDesc=" Motivated and Creative Web developer,building applications with cutting-edge technologies.Proven success in designing,coding, and testing Web applications.A passion for discovering solutions and drive to always improve user Experience."
    const count = useMotionValue(0);

    const count1 = useMotionValue(0);
    const rounded1 = useTransform(count1, (latest) => Math.round(latest));

    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayMyName = useTransform(rounded, (latest) =>
      myName.slice(0, latest));
    
    const displayMyDesc= useTransform(rounded1, (latest) =>
        myDesc.slice(0, latest));

  
    useEffect(() => {
      const controls = animate(count, myName.length, {
        type: "tween", // Not really needed because adding a duration will force "tween"
        duration: 4,
        ease: "easeInOut",
        // delayChildren: 0.3,
        // staggerChildren: 0.1
      });
      return controls.stop;
    }, []);

    useEffect(() => {
        const controls = animate(count1, myDesc.length, {
          type: "tween", // Not really needed because adding a duration will force "tween"
          duration: 12,
          ease: "easeInOut",
          delay:4
        });
        return controls.stop;
      }, []);

    return(
        
        <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
        className=" border-green-500  max-md:flex-col-reverse flex flex-1 flex-row items-center justify-center w-[100%] md:space-x-[100px] max-md:space-y-[25px] max-md:mb-20 md:mt-32 mb-3 max-md:mt-8 ">

                {/* left main div */}
            <div className=" flex-col  p-4 md:w-[40rem] w-[24rem]  ">

                <motion.span id='hero' className=" text-transparent bg-clip-text bg-gradient-to-br
                 from-green-600 to-purple-800
                  border-blue-500  text-7xl
                   font-semibold ">
                    
                {/* Inzamam Khan */}
                    {displayMyName}

                    
                </motion.span>
                <CursorBlinker/>
              
                


                
                



             <motion.p className=" mt-4 ">
                {/* Motivated and Creative Web developer,building applications with cutting-edge technologies.Proven success in designing,coding, and testing Web applications.A passion for discovering solutions and drive to always improve user Experience. */}
                {displayMyDesc}
                </motion.p> 

            </div>


            {/* right image main div */}
            <motion.div 
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:.3}}
            className=" rounded-xl w-[350px] max-md:w-[80vW] cursor-pointer ">
                <img src={userLogo} alt="" className=' rounded-xl '  />

            </motion.div>



        </motion.div>
    )
}