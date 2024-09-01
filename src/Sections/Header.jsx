import { useState } from "react"
import { MenuItems } from "../Components/MenuItems"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross2 } from "react-icons/rx"

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (<>
        <div id="#header" className="container fixed p-4  border-red-500 
        flex items-center justify-center max-md:justify-start w-full min-h-[50px] mb-5 text-center z-50 md:backdrop-blur-md">


            {/* menu items */}
            <div id="#header" className=" max-md:hidden p-4  flex items-center justify-center max-md:justify-end w-full min-h-[50px] mb-5 text-center z-50 backdrop-blur-md">            
                <MenuItems />
            </div>
            
            <div className=" cursor-pointer md:hidden " onClick={() => setIsOpen(!isOpen)}>

                {isOpen ? (
                    <RxCross2 />

                ) : (
                    <GiHamburgerMenu />
                )}

            </div>




        </div>

        {/* mobile  verson side menu */}
        <div className={`fixed z-50 top-[4rem] transform ease-in-out transition-all duration-500 
            ${isOpen ? `translate-x-0` : `translate-x-[100rem]`}  w-full bg-black md:hidden`}>
            <MenuItems setIsOpen={setIsOpen} isOpen={isOpen}/>

        </div>

    </>
    )
}