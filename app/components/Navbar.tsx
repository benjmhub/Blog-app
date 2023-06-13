'use client'

import { useState } from "react";
import {AiFillGithub , AiFillDribbbleCircle} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const HamburgerMenu = <GiHamburgerMenu 
                          color='black' 
                          className=' cursor-pointer px-3 h-[70px] w-[70px]' 
                          onClick={()=>setToggleMenu(!toggleMenu)}/>
  
    const CloseIcon = <AiOutlineClose 
                      color='black' 
                      size='40px' 
                      className=' cursor-pointer px-3 h-[70px] w-[70px]' 
                      onClick={()=>setToggleMenu(!toggleMenu)}/>

  return (
    <div className="app">
      <nav>
        <div className="w-full bg-white/30 mx-auto fixed z-40 shadow-lg">
          <div className="flex mx-auto justify-between w-5/6 backdrop-blur-md">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-4">
            {/* logo */}
              <div>
                <h1 className="text-3xl font-semibold">Farhan Khan</h1>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-5 absolute right-[1%]">
              <a href='https://github.com/itsfarhankhan28' className="text-3xl cursor-pointer"><AiFillGithub/></a>
              <a href='https://dev.to/itsfarhankhan28' className=" text-3xl cursor-pointer "><FaDev/></a>
              <a href='https://portfolio2-m2jd.vercel.app/' className=" text-3xl  cursor-pointer"><RiComputerFill/></a>
              <a href='https://dribbble.com/itsfarhankhan28' className="text-3xl  cursor-pointer"><AiFillDribbbleCircle/></a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div> */}
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center z-40">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? CloseIcon : HamburgerMenu}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-30 w-full items-center bg-white/30 backdrop-blur-xl overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-[60%]"
          }`}
        >
          <div className="px-8 my-28 ">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a className="flex gap-3 items-center justify-center" href='https://github.com/itsfarhankhan28'>
                <h1 className="text-[50px] cursor-pointer"><AiFillGithub/></h1>
                <h1 className="font-semibold text-3xl">Github</h1>
              </a>
              <a className="flex gap-3 items-center justify-center" href='https://dev.to/itsfarhankhan28'>
                <h1 className=" text-[50px] cursor-pointer"><FaDev/></h1>
                <h1 className="font-semibold text-3xl">Dev.to</h1>
              </a>
              <a className="flex gap-3 items-center justify-center" href='https://portfolio2-m2jd.vercel.app/'>
                <h1 className=" text-[50px]  cursor-pointer"><RiComputerFill/></h1>
                <h1 className="font-semibold text-3xl">Portfolio</h1>
              </a>
              <a className="flex gap-3 items-center justify-center" href='https://dribbble.com/itsfarhankhan28'>
                <h1 className="text-[50px] cursor-pointer"><AiFillDribbbleCircle/></h1>
                <h1 className="font-semibold text-3xl">Dribble</h1>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;