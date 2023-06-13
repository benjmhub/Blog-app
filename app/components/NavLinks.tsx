import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import {AiFillDribbbleCircle} from 'react-icons/ai'

export default function NavLinks() {
  return (
    <>
    <nav className="md:ml-auto flex md:flex-row xxsm:flex-col md:static md:pt-0 xxsm:pt-40 md:bg-none xxsm:absolute items-center justify-center xxsm:w-[100%] xxsm:right-0 cursor-pointer">
        <a href='https://github.com/itsfarhankhan28' className="xxsm:mt-3 md:mt-0 md:mr-5 xxsm:mr-0 font-herofont text-3xl"><AiFillGithub/></a>
        <a href='https://dev.to/itsfarhankhan28' className="xxsm:mt-3 md:mt-0 md:mr-5 xxsm:mr-0 font-herofont text-3xl"><FaDev/></a>
        <a href='https://portfolio2-m2jd.vercel.app/' className="xxsm:mt-3 md:mt-0 md:mr-5 xxsm:mr-0 font-herofont text-3xl"><RiComputerFill/></a>
        <a href='https://dribbble.com/itsfarhankhan28' className="xxsm:mt-3 md:mt-0 md:mr-5 xxsm:mr-0 font-herofont text-3xl"><AiFillDribbbleCircle/></a>
      </nav>
    </>
  )
}


