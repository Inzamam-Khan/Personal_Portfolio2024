import { EDUCATION } from "../Constants"

export const Education=()=>{
    return(
        <div className=" border-red-500 w-full flex flex-col items-center mx-auto mt-2 ">
       
        <h3 className="text-center text-4xl bg-gradient-to-r
         from-blue-400 to-orange-400 text-transparent bg-clip-text">EDUCATION</h3>

            <div className="flex flex-col gap-2 w-full mt-3 text-slate-300">
                {EDUCATION.map((item,index)=>(
                    <div key={index} className=" border-b  border-blue-200 p-3 gap-4 flex flex-col text-center "> 
                        <h1 className="text-3xl font-bold">{item.degree}
                        </h1>
                        <h2 className="text-slate-300 text-xl">{item.institution}</h2>
                        <span className="text-slate-500">{item.duration}</span>
                        <p className="text-green-300">{item.description}</p>

                    </div>
                ))}
            </div>


        </div>
    )
}