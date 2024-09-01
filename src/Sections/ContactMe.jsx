export const ContactMe=()=>{
    return(
        <div className=" border-red-500 w-full flex flex-col items-center mx-auto mt-4 ">
       
        <h3 id="contact" className="text-center text-4xl bg-gradient-to-r
         from-blue-400 to-orange-400 text-transparent bg-clip-text">CONTACT-ME</h3>

            <div className="mt-4 flex flex-col flex-1 items-center justify-center flex-wrap gap-4 w-full p-3">
               
                <input type="email" className="w-1/4 rounded-xl bg-[#118ab2] outline-none text-xl px-2 py-1  text-[#f9f7f3] " placeholder="Email"/>
                <input type="text-area " className=" w-1/2 min-h-[8rem] rounded-xl bg-[#118ab2] outline-none text-xl px-2 py-1  text-[#f9f7f3] " placeholder="Your Message Here"/>
                <button className="rounded-xl bg-[#118ab2] text-xl px-4 py-1 w-1/4">Send</button>
            </div>



         </div>
    )
}