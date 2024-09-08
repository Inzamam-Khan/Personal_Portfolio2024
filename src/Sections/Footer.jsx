import { SOCIAL_MEDIA_LINKS } from "../Constants"

export const Footer=()=>{
    return(
        <div className="  w-full flex flex-col items-center  mt-2 bg-black rounded-xl py-7 ">
       
        <div className="text-center text-4xl bg-gradient-to-r
         from-blue-400 to-orange-400 text-transparent bg-clip-text ">INZAMAM</div>
         <span className="my-2 text-slate-400">React Developer | Problem Solver</span>
        
         <a className="text-blue-300 hover:text-slate-50" href="https://github.com/Inzamam-Khan?tab=repositories" target="_blank"> Git Hub Profile</a>



                    
                    {/* first box icon and info-text*/}
                <div className="flex flex-col items-center">
                    
                    

                    <p className='capitalize text-center mt-6 text-base leading-7 font-montserrat text-white-400 max-w-md '>

                    <span>Developed and maintained  React applications.</span>
                        <div>Design and Implement responsive, user-centered web solutions.</div>
                    <span className="block">Exploring new technologies.</span>
                    
                    </p>

                    <div className="flex  items-center justify-center gap-5 mt-8 ">

                        {SOCIAL_MEDIA_LINKS.map((item)=>(
                            <div className='flex justify-center items-center w-12 h-12 border rounded-full'>
                                {item.icon} 
                            </div>
                        ))}
                    </div>
                </div>

                                {/* second box i.e link part */}
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              
                            {/* last box footer part */}
            <div className="flex justify-between text-white-400 mt-24 
            max-sm:flex-col max-sm:items-center">
                
                <div className='flex flex-1 justify-start items-center
                gap-4 font-montserrat cursor-pointer'>
                    {/* <img src={copyRight} alt="" className="rounded-full m-0" widht={20} height={20} /> */}
                    <p>Copyright. All rights reserved@ 2024</p>
                </div>

                <p className="font-montserrat cursor-pointer ml-1">
                    Terms & Conditions.
                </p>
                </div>



    



        </div>
        </div>
    )
}