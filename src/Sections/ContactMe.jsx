
import {motion} from 'motion/react'
import { i } from 'motion/react-client'
import { useState } from 'react'
import toast from 'react-hot-toast'

export const ContactMe=()=>{
    const[input,setInput]=useState({
        name:"",
        message:""
    })
    
    

    const handleSubmit=()=>{
        if(input.name!="" && input.message!="" ) {
            const userConfirm=window.confirm(`${input.name.charAt(0).toUpperCase() + input.name.slice(1)},
Are you sure you want to send this message?`)
if(userConfirm){
    toast.success("Message Sent!")
    setInput({name:"",message:""})
}


    }
        
        else{
            if(!input.name)  window.alert("Please Enter your name")
           else{
        window.alert("Enter the Message...")}
        }}
    return(
        <div className=" border-red-500 w-full flex flex-col items-center mx-auto mt-4 ">
       
        <h3 id="contact" className="text-center text-4xl bg-gradient-to-r
         from-blue-400 to-orange-400 text-transparent bg-clip-text">CONTACT-ME</h3>

            <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.6}}
            className=" mt-4 flex flex-col flex-1 items-center justify-center flex-wrap gap-4 w-full p-3">
               
                <input type="text" className="w-1/4 rounded-xl bg-[#118ab2] outline-none text-xl px-2 py-1  text-[#f9f7f3] " placeholder="Name " value={input.name} onChange={(e)=>setInput({...input,name:e.target.value})}/>
                <input type="text-area " className=" w-1/2 min-h-[8rem] rounded-xl bg-[#118ab2] outline-none text-xl px-2 py-1  text-[#f9f7f3] " placeholder="Your Message Here"
                value={input.message} 
                onChange={(e)=>{setInput({...input,message:e.target.value})}}
                />
                <button onClick={()=>handleSubmit()} className="rounded-xl bg-[#118ab2] text-xl px-4 py-1 w-1/4">Send</button>
            </motion.div>



         </div>
    )
}