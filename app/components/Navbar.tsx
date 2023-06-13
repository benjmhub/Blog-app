import React from 'react'
import {AiFillGithub , AiFillDribbbleCircle} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <header className="lg:bg-gradient-to-r from-secondary to-primary body-font">
  <div className="container mx-auto flex py-5 xxsm:px-0 md:px-24 items-center justify-center md:gap-0 xxsm:gap-4">
    <a className="flex title-font font-medium text-gray-900 mb-4 md:mb-0 text-center">
      <Link href='/'><span className="ml-3 font-semibold md:text-3xl xxsm:text-2xl">Farhan Khan</span></Link>
    </a>
    <nav className="md:ml-auto flex  items-center text-base justify-center">
    <a href='https://github.com/itsfarhankhan28' className="mr-5 md:text-3xl xxsm:text-2xl cursor-pointer"><AiFillGithub/></a>
      <a href='https://dev.to/itsfarhankhan28' className="mr-5 md:text-3xl xxsm:text-2xl cursor-pointer"><FaDev/></a>
      <a href='https://portfolio2-m2jd.vercel.app/' className="mr-5 md:text-3xl xxsm:text-2xl cursor-pointer"><RiComputerFill/></a>
      <a href='https://dribbble.com/itsfarhankhan28' className="mr-5 md:text-3xl xxsm:text-2xl cursor-pointer"><AiFillDribbbleCircle/></a>
    </nav>
  </div>
</header>
    </>
  )
}
