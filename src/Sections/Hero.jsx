import userLogo from '../assets/bgImages/inzamamReactJs.jpeg'

import {motion} from 'motion/react'
export const Hero=()=>{
    return(
        
        <motion.div
      

        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.6}}
        className=" border-green-500 max-md:flex-col-reverse flex flex-1 flex-row items-center justify-center w-[100%] md:space-x-[100px] max-md:space-y-[25px] max-md:mb-20 md:mt-32 mb-3 max-md:mt-8 ">

                {/* left main div */}
            <div className=" flex flex-col  p-4 max-w-[40rem]">
                <h3 id='hero' className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-purple-800 border-blue-500 max-w-[20rem] text-7xl font-semibold ">
                Inzamam Khan
                    
                </h3>


                <p className=" mt-4 ">
                Motivated and Creative Web developer,building applications with cutting-edge technologies.Proven success in designing,coding, and testing Web applications.A passion for discovering solutions and drive to always improve user Experience.
                </p>

            </div>


            {/* right image main div */}
            <motion.div 
            initial={{scale:1}}
            whileHover={{scale:1.1}}
            transition={{duration:.3}}
            className=" rounded-xl w-[350px] max-md:w-[80vW]  ">
                <img src={userLogo} alt="" className=' rounded-xl '  />

            </motion.div>



        </motion.div>
    )
}