export const MenuItems=({setIsOpen})=>{
    return(
        <div id="#header" className="container fixed p-4  border-red-500 
        flex items-center justify-center  w-full min-h-[50px] mb-5 text-center z-50 backdrop-blur-md">

<div className=" border-blue-500 sticky flex flex-1 max-md:flex-col items-center justify-center gap-5 text-xl p-4 font-semibold">


<div className=" font-bold  md:mr-auto max-md:mb-8 hover:text-black cursor-pointer py-2 px-4 rounded-full bg-gradient-to-r from-[#219ebc] to-[#f72585] ">Inzamam</div>


<div onClick={()=>setIsOpen(false)}>
<a  href="#hero" className="bg-gradient-to-r  from-blue-500 to-orange-500 rounded-full py-1 px-3  leading-normal hover:bg-[#a2d2ff] hover:text-black">
    About
</a>
</div>

<div onClick={()=>setIsOpen(false)}>
<a  href="#projects" className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full py-1 px-3  leading-normal hover:bg-[#a2d2ff] hover:text-black">
    Projects
</a></div>


<div onClick={()=>setIsOpen(false)}>
<a href="#skills" className="  bg-gradient-to-r from-blue-500 to-orange-500 rounded-full py-1 px-6  leading-normal hover:bg-[#a2d2ff] hover:text-black">
    Skills
</a>
</div>

<div onClick={()=>setIsOpen(false)}>
<a  href="#contact" className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-full py-1 px-3  leading-normal hover:bg-[#a2d2ff] hover:text-black">
    Contact
</a>
</div>



</div>
        </div>
    )
}