import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react"

const Header = () => {
  const [menu,openMenu] = useState(false);
  const [showmenu,setShowmenu] = useState(true);
  return (

    <header className="flex flex-wrap justify-between md:items-center text-white  px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul className={`${menu?'block':'hidden'}     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-20 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <li className="text-md transition-all duration-300 p-1 md:p-0"><a href="#about">About</a></li>
        <li className="text-md transition-all duration-300 p-1 md:p-0"><a href="#projects">Projects</a></li>
        <li className="text-md transition-all duration-300 p-1 md:p-0"><a href="#contact">Contact</a></li>
      </ul> 
      {
        showmenu?(
          <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
            openMenu(!menu); setShowmenu(!showmenu)
          }}/>
        ):<RiCloseLine size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{
            openMenu(!menu); setShowmenu(!showmenu)
          }}/>
      }
    </header>
  )
}

export default Header
